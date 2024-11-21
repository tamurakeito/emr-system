import { Outlet } from "react-router-dom";
import classes from "./styles.module.scss";
import Text, { textSizes } from "ui/atoms/text";
import ControlPanel from "components/control-panel";
import classNames from "classnames";

const MainLayout = () => {
  return (
    <div className={classes.main_layout}>
      <div className={classes.main_container}>
        <Outlet />
      </div>
      <ControlPanel />
    </div>
  );
};

export default MainLayout;
