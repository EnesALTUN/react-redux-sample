import { useState } from "react";
import { MobilMenu } from "../index";
import { Link } from "react-router-dom";
import { Adb as AdbIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@mui/material";

const NavMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState(false);

  const closeNavMenuHandler = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="menu" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to="/" className="menu-link">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Link>

          <MobilMenu
            anchorElNav={anchorElNav}
            setAnchorElNav={setAnchorElNav}
            closeNavMenuHandler={closeNavMenuHandler}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/counter" className="menu-link">
              <Button onClick={closeNavMenuHandler}>Counter</Button>
            </Link>
            <Link to="/posts" className="menu-link">
              <Button onClick={closeNavMenuHandler}>Posts</Button>
            </Link>
            <Link to="/post/create" className="menu-link">
              <Button onClick={closeNavMenuHandler}>Post Create</Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavMenu;
