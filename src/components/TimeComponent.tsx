import { formatDateTime } from "@/utils/common/formatters";
import { FC, useEffect, useState, useRef } from "react";

export const TimeComponent: FC = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());

    intervalRef.current = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <p>{currentTime ? formatDateTime(currentTime) : "Loading time!"}</p>
    </div>
  );
};
