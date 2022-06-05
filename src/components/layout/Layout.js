import { Outlet } from "react-router-dom";
import { Header } from "../index";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box className="layout">
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
