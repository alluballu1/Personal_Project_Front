import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Link,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GiBookshelf, GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const settings = ["Log out"];

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [login, setlogin] = useState(props.login);
  const navigate = useNavigate()
  const pages = login ? [
    { name: "My Projects", link: "/my_projects" },
    { name: "All Projects", link: "/" },
  ] : [ { name: "All Projects", link: "/" }]
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    window.localStorage.removeItem("LoggedUserData");
    handleCloseNavMenu()
    handleCloseUserMenu()
    setlogin(null);
    navigate("/")
  };
  useEffect(() => {
    const token = window.localStorage.getItem("LoggedUserData");
    if (token) {
      setlogin(JSON.parse(token));
    }
  }, [props]);

  return (
    <AppBar
      style={{ background: "#333333", color: "#ffffff" }}
      position="fixed"
    >
      <Container maxWidth="20">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <GiBookshelf size={50} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <GiHamburgerMenu size={36} />
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => {
                return (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link
                      variant="body1"
                      underline="hover"
                      color="inherit"
                      onClick={() => navigate(page.link)}
                    >
                      {page.name}
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => navigate(page.link)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              );
            })}
          </Box>
          {login !== null ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={login.username}
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={index} onClick={() => handleLogOut()}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box>
              <Tooltip title="Login">
                <Link
                  sx={{
                    backgroundColor: "#414141",
                    color: "white",
                    padding: 1,
                    borderRadius: 2,
                    ":hover": {
                      backgroundColor: "#292929",
                      color: "white",
                      cursor:"pointer"
                    },
                  }}
                    underline="none"
                    onClick={() => navigate("/login")}
                >
                  Login
                </Link>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
