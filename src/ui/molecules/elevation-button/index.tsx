import { ReactNode } from "react";
import classes from "./styles.module.scss";
import classNames from "classnames";
import Button, { ButtonProps } from "ui/atoms/button";
import Elevation, { ElevationProps } from "ui/atoms/elevation";

export interface MorphButtonProps
  extends Omit<ButtonProps, "className" | "children">,
    ElevationProps {
  type?: MorphButtonSizes;
  color?: MorphButtonColors;
}

const MorphButton = ({
  className,
  children,
  type,
  color,
  onClick,
}: MorphButtonProps) => {
  const clazz = classNames([classes.elevation_button, type, color, className]);
  return (
    <Button onClick={onClick}>
      <Elevation className={clazz}>{children}</Elevation>
    </Button>
  );
};

export default MorphButton;

export const morphButtonSizes = {
  medium: classes.size_medium,
  small: classes.size_small,
  wide: classes.size_wide,
} as const;
export type MorphButtonSizes =
  (typeof morphButtonSizes)[keyof typeof morphButtonSizes];

export const morphButtonColors = {
  gray: classes.color_gray,
  primary: classes.color_primary,
  orange: classes.color_orange,
} as const;
export type MorphButtonColors =
  (typeof morphButtonColors)[keyof typeof morphButtonColors];
