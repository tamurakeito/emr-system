import { ReactNode } from "react";
import classes from "./styles.module.scss";
import classNames from "classnames";

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ className, children, onClick }: ButtonProps) => {
  const clazz = classNames([classes.button, className]);
  return (
    <div className={clazz} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
