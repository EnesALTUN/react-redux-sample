import { useState } from "react";
import { MobilMenu } from "../index";
import { Adb as AdbIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  Link,
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
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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

          <MobilMenu
            anchorElNav={anchorElNav}
            setAnchorElNav={setAnchorElNav}
            closeNavMenuHandler={closeNavMenuHandler}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link href="/counter">
              <Button
                onClick={closeNavMenuHandler}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Counter
              </Button>
            </Link>
            <Link href="/posts">
              <Button
                onClick={closeNavMenuHandler}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Posts
              </Button>
            </Link>
            <Link href="/post/create">
              <Button
                onClick={closeNavMenuHandler}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Post Create
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavMenu;
