import React, { useEffect } from "react";
import {
  IconButton,
  Menu,
  Button,
  Tooltip,
  Avatar,
  AppBar,
  Box,
  InputBase,
  styled,
  StyledToolbar,
  Toolbar,
  Typography,
  MenuItem,
  StepButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../../css/navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const pages = ["Specialities", "Hospitals", "Ambulence", "Contact-us"];
  const settings = ["Login", "Logout", "Profile", "Dashboard"];

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

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(logout());
      // dispatch()
    });
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    document.addEventListener("scroll", changeBackground);
    return () => {
      document.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div>
      <AppBar
        // position='fixed'
        className={navbar ? "navbar" : "navbar active"}
      >
        <Toolbar>
          <Box
            component="img"
            src="/images/site_logo.png"
            alt="no image"
            sx={{
              height: "50px",
              width: "auto",
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
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
            HOME
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link className="navButton" to={`/${page}`}>
                    <Typography sx={{textAlign:'center'}}>{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="img"
            src="/images/site_logo.png"
            alt="no image"
            sx={{
              height: "50px",
              width: "auto",
              display: { xs: "flex", md: "none" },
              mr: 1,
            }}
          />

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
            HOME
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page} className="navButton" to={`/${page}`}>
                <Button
                  className={navbar ? "navbar" : "navbar active"}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box style={{ display: "flex", flexDirection: "row" }}>
              <AccountCircleIcon />
              <Tooltip title="Open Account">
                <Typography
                  className={navbar ? "navbar" : "navbar active"}
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  Account
                </Typography>
              </Tooltip>
            </Box>

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
              className="dropDown"
            >
              <MenuItem className="dropDownList">
                <Typography sx={{textAlign:'center'}}>Profile</Typography>
              </MenuItem>
              <MenuItem className="dropDownList">
               <Link to="/dashboard">Dashboard</Link>
              </MenuItem>
              <MenuItem className="dropDownList">
                {email ? (
                  <Typography onClick={handleLogout} sx={{textAlign:'center'}}>
                    Logout
                  </Typography>
                ) : (
                  <Link to="/login" sx={{textAlign:'center'}}>
                    Login
                  </Link>
                )}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
