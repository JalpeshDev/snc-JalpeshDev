import { User } from "@/utils/common/person";
import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import { PersonData } from "./PersonData";
import { Skeleton } from "./Skeleton";

type PersonCardProps = {
  data: User | undefined;
  isLoading: boolean;
  error: boolean;
};

export const Card: FC<PropsWithChildren<PersonCardProps>> = ({
  data,
  isLoading,
  error,
}) => {
  return (
    <div>
      {!isLoading && error && (
        <p
          className={classNames(
            "w-full h-full",
            "flex items-center justify-center",
          )}
        >
          {"Error while fetching data!"}
        </p>
      )}
      {!isLoading && data && !error && <PersonData data={data} />}
      {isLoading && <Skeleton />}
    </div>
  );
};
