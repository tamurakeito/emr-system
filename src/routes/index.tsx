import { Routes, Route } from "react-router-dom";

import Layout from "pages/layout";

export const RouteSelector = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      </Route>
    </Routes>
  );
};
