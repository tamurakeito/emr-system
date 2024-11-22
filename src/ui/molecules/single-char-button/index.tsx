import classes from "./styles.module.scss";
import ElevationButton, {
  morphButtonColors,
  MorphButtonProps,
  morphButtonSizes,
} from "ui/molecules/morph-button";

interface SingleCharButtonProps extends Omit<MorphButtonProps, "children"> {
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
      type={props.type ?? morphButtonSizes.medium}
      color={props.color ?? morphButtonColors.gray}
      {...props}
    >
      <div className={classes.single_char_button}>{char.charAt(0)}</div>
    </ElevationButton>
  );
};

export default SingleCharButton;
