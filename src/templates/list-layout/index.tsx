import { Outlet } from "react-router-dom";
import classes from "./styles.module.scss";
import Text, { textSizes } from "ui/atoms/text";

const ListLayout = () => {
  return (
    <div>
      <Text size={textSizes.h1}>hello world</Text>
      <Outlet />
    </div>
  );
};

export default ListLayout;
