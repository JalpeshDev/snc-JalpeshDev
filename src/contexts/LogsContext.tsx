import { FC, PropsWithChildren, createContext, useState, useMemo } from "react";

export interface ILogContext {
  enableLogs: boolean;
  onToggleEnableLogs: () => void;
}

export const LogsContext = createContext<ILogContext | undefined>(undefined);

export const LogsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [enableLogs, setEnableLogs] = useState(true);

  const onToggleEnableLogs = () => setEnableLogs((prev) => !prev);

  const value = useMemo(
    () => ({
      enableLogs,
      onToggleEnableLogs,
    }),
    [enableLogs],
  );

  return <LogsContext.Provider value={value}>{children}</LogsContext.Provider>;
};
