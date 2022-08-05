import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../images/logo.png"
import { useNavigate } from "react-router-dom";



const pages = [
                {
                  pageName: "Home",
                  url: "/",
                },
                {
                  pageName: "About Us",
                  url: "/about-us",
                },
                {
                  pageName: "Apply Now",
                  url: "/apply-now",
                },
                {
                  pageName: "Financial Services",
                  url: "/financial-services",
                },
                {
                  pageName: "FAQ",
                  url: "/faq",
                },
                {
                  pageName: "Blog",
                  url: "/blog",
                },
                {
                  pageName: "Contact Us",
                  url: "contact-us",
                }
              ];

const settings = ["Profile", "Account", "Dashboard", "Logout"];


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (url) => {
    if(url != "")
     navigate(url)
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();


  return (  

    // backgroundColor: "rgba(220, 222, 226, 0.4)"
    <AppBar position="fixed"  sx={{backgroundColor: "rgba(18, 18, 18, 0.4)", backdropFilter: "blur(4px)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            
          </Typography> */}
          <Box component="img" src={Logo} sx = {{width: "156px", mr: 2, display: { xs: "none", md: "flex" }}}></Box>
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
            {/* Menu For Mobile */}
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
              onClose={() =>{handleCloseNavMenu("")}}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, key) => (
                <MenuItem key={key} 
                onClick={() =>{handleCloseNavMenu(page.url)}}
                >
                  <Typography textAlign="center">{page.pageName}</Typography>
                </MenuItem>
                
              ))}
            </Menu>
            {/* Menu For Mobile */}
          </Box>
          {/* Logo For Mobile */}
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO1
          </Typography> */}
          <Box component="img" src={Logo} sx = {{width: "156px", mr: 2, display: { xs: "flex", md: "none" }}}></Box>

          {/* Logo For Mobile */}

          {/* Menu For Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "right" }}>
            {pages.map((page, key) => (
              <Button
                key={key}
                // onClick={handleCloseNavMenu()}
                onClick = { () => { navigate(page.url) } }
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.pageName}
              </Button>
            ))}
          </Box>
          {/* Menu For Desktop */}

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
