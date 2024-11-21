import Text, { textSizes } from "ui/atoms/text";
import classes from "./styles.module.scss";
import IconButton, { buttonIcons } from "ui/molecules/icon-button";
import SingleCharButton from "ui/molecules/single-char-button";
import ElevationButton, {
  elevationButtonColors,
  elevationButtonSizes,
} from "ui/molecules/elevation-button";
import Elevation from "ui/atoms/elevation";
import Input from "ui/atoms/input";
import { Activity } from "react-feather";
import LabelButton, { buttonLabels } from "ui/molecules/label-button";
import Inversion from "ui/atoms/inversion";

const ControlPanel = () => {
  const handleUserLearve = () => {};
  const handleUserSwitch = () => {};
  const handleSignOut = () => {};
  return (
    <Elevation className={classes.control_panel}>
      <div className={classes.user_control_panel}>
        <div className={classes.user_action_bar}>
          <IconButton icon={buttonIcons.userX} onClick={handleUserLearve} />
          <IconButton icon={buttonIcons.users} onClick={handleUserSwitch} />
          <IconButton
            icon={buttonIcons.home}
            color={elevationButtonColors.orange}
            onClick={handleSignOut}
          />
        </div>
        <div className={classes.user_profile}>
          <div className={classes.account_field}>
            <IconButton
              className={classes.fixed}
              icon={buttonIcons.settings}
              type={elevationButtonSizes.small}
              onClick={() => {}}
            />
            <Input
              className={classes.input}
              value={"田村 慧人"}
              onChange={() => {}}
              readOnly
            />
          </div>
          <div className={classes.account_field}>
            <SingleCharButton
              className={classes.fixed}
              char={"依存"}
              type={elevationButtonSizes.small}
              color={elevationButtonColors.primary}
              onClick={() => {}}
            />
            <Input
              className={classes.input}
              value={""}
              onChange={() => {}}
              readOnly
            />
            <SingleCharButton
              className={classes.fixed}
              char={"Clear"}
              type={elevationButtonSizes.small}
              onClick={() => {}}
            />
          </div>
          <div className={classes.account_field}>
            <SingleCharButton
              className={classes.fixed}
              char={"指導"}
              type={elevationButtonSizes.small}
              color={elevationButtonColors.primary}
              onClick={() => {}}
            />
            <Input
              className={classes.input}
              value={""}
              onChange={() => {}}
              readOnly
            />
            <SingleCharButton
              className={classes.fixed}
              char={"Clear"}
              type={elevationButtonSizes.small}
              color={elevationButtonColors.primary}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className={classes.view_selector}>
        <LabelButton label={buttonLabels.emergency} onClick={() => {}} />
        <IconButton
          icon={buttonIcons.chevronDown}
          type={elevationButtonSizes.small}
          color={elevationButtonColors.primary}
          onClick={() => {}}
        />
      </div>
      <Inversion className={classes.active_karte_list}>
        <div></div>
      </Inversion>
      <div className={classes.menu_control_panel}>
        <div className={classes.menu_access_bar}>
          <IconButton
            icon={buttonIcons.serch}
            type={elevationButtonSizes.small}
            onClick={() => {}}
          />
          <IconButton
            className={classes.right_access_button}
            icon={buttonIcons.grid}
            type={elevationButtonSizes.small}
            onClick={() => {}}
          />
        </div>
        <div className={classes.menu_list_switcher}>
          <IconButton
            icon={buttonIcons.serch}
            type={elevationButtonSizes.wide}
            onClick={() => {}}
          />
          <IconButton
            className={classes.right_access_button}
            icon={buttonIcons.grid}
            type={elevationButtonSizes.small}
            onClick={() => {}}
          />
        </div>
        <div className={classes.menu_list}>
          {/* <div className={classes.menu_selector}></div> */}
          <div className={classes.saved_menu_list}></div>
        </div>
      </div>
    </Elevation>
  );
};

export default ControlPanel;
