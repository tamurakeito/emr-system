import classNames from "classnames";
import classes from "./styles.module.scss";
import { Activity } from "react-feather";
import ElevationButton, { MorphButtonProps } from "ui/molecules/morph-button";
import Text, { textColors, textSizes } from "ui/atoms/text";

interface LabelButtonProps
  extends Omit<MorphButtonProps, "children" | "color"> {
  label: ButtonLabels;
}

const LabelButton = ({ className, label, ...props }: LabelButtonProps) => {
  const clazz = classNames([classes.label_button, className]);
  return (
    <ElevationButton className={clazz} {...props}>
      <Activity size={16} />
      <Text size={textSizes.h4} color={textColors.gray_800}>
        救急一覧
      </Text>
    </ElevationButton>
  );
};

export default LabelButton;

export const buttonLabels = {
  emergency: classes.label_emergency,
} as const;
export type ButtonLabels = (typeof buttonLabels)[keyof typeof buttonLabels];
