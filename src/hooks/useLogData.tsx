import { useLogs } from "@/contexts/useLogs";
import { formatDateTime } from "@/utils/common/formatters";
import { User } from "@/utils/common/person";
import { useEffect } from "react";

export const useLogData = (personData: User | undefined): void => {
  const { enableLogs } = useLogs();

  useEffect(() => {
    if (enableLogs && personData) {
      const time = formatDateTime(new Date());
      console.log("Person details:", personData);
      console.log("Current time:", time);
    }
  }, [personData, enableLogs]);
};
