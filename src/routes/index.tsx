import NotFoundPage from "pages/404error";
import Home from "pages/home";
import { Routes, Route } from "react-router-dom";

import MainLayout from "templates/main-layout";

export const RouteSelector = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
