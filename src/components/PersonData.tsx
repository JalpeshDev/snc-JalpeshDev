import { User } from "@/utils/common/person";
import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";

type PersonDataProps = {
  data: User;
};

export const PersonData: FC<PersonDataProps> = ({ data }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-sm px-20 py-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center">
          <div
            className={classNames(
              "w-[100px] h-[100px] rounded-full overflow-hidden relative",
            )}
          >
            <Image
              src={data.profilePictureUrl}
              alt="User photo"
              className="absolute object-cover"
              fill
              sizes="100px"
            />
          </div>
        </div>
        <p
          className={classNames(
            "w-full text-center text-[20px] font-medium mt-[10px] mb-[5px]",
          )}
        >
          {data.name}
        </p>
        <p
          className={classNames(
            "w-full max-w-[200px] text-center mb-[20px] text-slate-400",
          )}
        >
          {data.title}
        </p>
        <a className="inline-flex items-center px-3 py-2 mr-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add friend
        </a>
        <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white border border-black rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-gray-500">
          Message
        </a>
      </div>
    </div>
  );
};
