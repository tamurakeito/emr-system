import { ReactNode } from "react";
import classes from "./styles.module.scss";
import classNames from "classnames";

export interface ElevationProps {
  children: ReactNode;
  className?: string;
}

const Elevation = ({ children, className }: ElevationProps) => {
  const clazz = classNames([classes.elevation, className]);
  return <div className={clazz}>{children}</div>;
};

export default Elevation;
