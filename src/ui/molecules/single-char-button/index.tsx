import classNames from "classnames";
import classes from "./styles.module.scss";
import ElevationButton, {
  elevationButtonColors,
  ElevationButtonProps,
  elevationButtonSizes,
} from "ui/molecules/elevation-button";

interface SingleCharButtonProps extends Omit<ElevationButtonProps, "children"> {
  char: string;
}

const SingleCharButton = ({
  className,
  char,
  ...props
}: SingleCharButtonProps) => {
  return (
    <ElevationButton
      className={className}
      type={props.type ?? elevationButtonSizes.medium}
      color={props.color ?? elevationButtonColors.gray}
      {...props}
    >
      <div className={classes.single_char_button}>{char.charAt(0)}</div>
    </ElevationButton>
  );
};

export default SingleCharButton;
