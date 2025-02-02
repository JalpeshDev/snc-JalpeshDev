import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person, User, fetchPerson } from "@/utils/common/person";
import { useQuery } from "react-query";
import { useLogData } from "@/hooks/useLogData";
import { Card } from "@/components/Card";
import { TimeComponent } from "@/components/TimeComponent";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const {
    isFetching,
    data: personData,
    error,
    refetch,
  } = useQuery<User>(
    "person",
    ({ signal }) => fetchPerson(signal, selectedPerson),
    {
      enabled: !!selectedPerson,
      retry: false,
      cacheTime: 0,
      refetchOnWindowFocus: false,
      keepPreviousData: false,
    },
  );

  useEffect(() => {
    if (selectedPerson) {
      refetch({ cancelRefetch: true });
    }
  }, [selectedPerson, refetch]);

  useLogData(personData);

  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center",
      )}
    >
      <div className="flex">
        {"Current Date & Time: "} <TimeComponent />
      </div>

      <div className={classNames("flex gap-2", "mt-[30px]")}>
        {Object.values(Person).map((person) => (
          <Button
            key={person}
            onClick={() => setSelectedPerson(person)}
            isSelected={selectedPerson === person}
          >
            {person}
          </Button>
        ))}
        <button />
      </div>

      <div className={classNames("w-full max-w-[500px]", "mt-[30px]")}>
        <Card isLoading={isFetching} error={!!error} data={personData} />
      </div>
    </main>
  );
};
