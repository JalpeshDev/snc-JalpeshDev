import { FC, PropsWithChildren } from "react";
import classNames from "classnames";

type ButtonProps = {
  onClick: () => void;
  isSelected: boolean;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  isSelected,
  children,
}) => {
  return (
    <button
      type="button"
      className={classNames("px-2 py-1 border border-black", {
        "bg-blue-400": isSelected,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
