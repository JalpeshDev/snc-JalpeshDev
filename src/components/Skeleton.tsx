import classNames from "classnames";
import { FC } from "react";

export const Skeleton: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-sm px-20 py-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-pulse">
        <div className="flex justify-center">
          <div
            className={classNames(
              "w-[100px] h-[100px]",
              "rounded-full",
              "bg-slate-300",
              "overflow-hidden",
              "relative",
            )}
          />
        </div>
        <div
          className={classNames(
            "w-full",
            "text-center text-[20px] font-medium",
            "my-[10px]",
            "bg-slate-300",
            "h-[22px]",
          )}
        />
        <div
          className={classNames(
            "w-full max-w-[200px]",
            "text-center",
            "my-[10px]",
            "bg-slate-300",
            "h-[18px]",
          )}
        />
        <div className="inline-flex items-center px-3 py-2 mr-3 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-slate-300 h-[32px] w-[90px]" />
        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black border rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-gray-500 bg-slate-300 h-[32px] w-[90px]" />
      </div>
    </div>
  );
};
