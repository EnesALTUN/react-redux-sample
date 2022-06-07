import { Adb as AdbIcon, Menu as MenuIcon } from "@mui/icons-material";
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";

const MobilMenu = (props) => {
  const { anchorElNav, setAnchorElNav, closeNavMenuHandler } = props;

  const openNavMenuHandler = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={openNavMenuHandler}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={closeNavMenuHandler}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <MenuItem onClick={closeNavMenuHandler}>
            <Link
              href="/counter"
              sx={{ color: "black", textDecoration: "none" }}
            >
              Counter
            </Link>
          </MenuItem>
          <MenuItem onClick={closeNavMenuHandler}>
            <Link href="/posts" sx={{ color: "black", textDecoration: "none" }}>
              Posts
            </Link>
          </MenuItem>
        </Menu>
      </Box>
      <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
    </>
  );
};

export default MobilMenu;
