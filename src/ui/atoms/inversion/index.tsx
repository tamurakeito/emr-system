import { ReactNode } from "react";
import classes from "./styles.module.scss";
import classNames from "classnames";

export interface InversionProps {
  children: ReactNode;
  className?: string;
}

const Inversion = ({ children, className }: InversionProps) => {
  const clazz = classNames([classes.inversion, className]);
  return <div className={clazz}>{children}</div>;
};

export default Inversion;
