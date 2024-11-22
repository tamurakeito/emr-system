import classNames from "classnames";
import classes from "./styles.module.scss";
import {
  ChevronDown,
  Grid,
  Home,
  Search,
  Settings,
  Users,
  UserX,
} from "react-feather";
import ElevationButton, {
  morphButtonColors,
  MorphButtonProps,
  morphButtonSizes,
} from "ui/molecules/morph-button";

interface IconButtonProps extends Omit<MorphButtonProps, "children"> {
  icon: ButtonIcons;
}

const IconButton = ({ className, icon, ...props }: IconButtonProps) => {
  const clazz = classNames([classes.icon_button, className]);
  return (
    <ElevationButton
      className={clazz}
      type={props.type ?? morphButtonSizes.medium}
      color={props.color ?? morphButtonColors.gray}
      {...props}
    >
      {icon}
    </ElevationButton>
  );
};

export default IconButton;

export const buttonIcons = {
  home: <Home size={16} />,
  userX: <UserX size={16} />,
  users: <Users size={16} />,
  settings: <Settings size={16} />,
  chevronDown: <ChevronDown size={16} />,
  serch: <Search size={16} />,
  grid: <Grid size={16} />,
} as const;
export type ButtonIcons = (typeof buttonIcons)[keyof typeof buttonIcons];
