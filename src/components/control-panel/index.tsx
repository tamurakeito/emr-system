import classes from "./styles.module.scss";
import IconButton, { buttonIcons } from "ui/molecules/icon-button";
import SingleCharButton from "ui/molecules/single-char-button";
import { morphButtonColors, morphButtonSizes } from "ui/molecules/morph-button";
import Elevation from "ui/atoms/elevation";
import Input from "ui/atoms/input";
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
            color={morphButtonColors.orange}
            onClick={handleSignOut}
          />
        </div>
        <div className={classes.user_profile}>
          <div className={classes.account_field}>
            <IconButton
              className={classes.fixed}
              icon={buttonIcons.settings}
              type={morphButtonSizes.small}
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
              type={morphButtonSizes.small}
              color={morphButtonColors.primary}
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
              type={morphButtonSizes.small}
              onClick={() => {}}
            />
          </div>
          <div className={classes.account_field}>
            <SingleCharButton
              className={classes.fixed}
              char={"指導"}
              type={morphButtonSizes.small}
              color={morphButtonColors.primary}
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
              type={morphButtonSizes.small}
              color={morphButtonColors.primary}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className={classes.view_selector}>
        <LabelButton label={buttonLabels.emergency} onClick={() => {}} />
        <IconButton
          icon={buttonIcons.chevronDown}
          type={morphButtonSizes.small}
          color={morphButtonColors.primary}
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
            type={morphButtonSizes.small}
            onClick={() => {}}
          />
          <IconButton
            className={classes.right_access_button}
            icon={buttonIcons.grid}
            type={morphButtonSizes.small}
            onClick={() => {}}
          />
        </div>
        <div className={classes.menu_list_switcher}>
          <IconButton
            icon={buttonIcons.serch}
            type={morphButtonSizes.wide}
            onClick={() => {}}
          />
          <IconButton
            className={classes.right_access_button}
            icon={buttonIcons.grid}
            type={morphButtonSizes.small}
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
