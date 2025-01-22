import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, Box,
  Button,
  useMediaQuery,
  useTheme
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';


const TopBar = ({ open, handleDrawerOpen, gateway_details, logo,darkMode, setDarkMode }) => {
  const theme = useTheme(); // Access the Material-UI theme
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is small (mobile)
 
  let isDark = theme.palette.mode === "dark";

let iconProps = { dataColor: "var(--md-sys-color-onPrimaryContainer)", style: { marginRight: 8 } };

const renderIcon = () => {
  switch (gateway_details.name) {
    case "NikoBizz Mobile":
      return <adaptive-ui-icon {...iconProps} icon="icons:MdBusinessCenter" />;
    case "MIPAY":
      return <adaptive-ui-icon {...iconProps} icon="icons:MdOutlineSmartphone" />;
    case "NenaSasa":
      return <adaptive-ui-icon {...iconProps} icon="icons:MdPayment" />; // assuming an icon for NenaSasa
    default:
      return null;
  }
};

  return (
    <AppBar
      elevation={0}
      position="fixed"
      style={{
        background: 'var(--md-sys-color-surfaceContainerLowest)',
      }}
      sx={{
        width: isMobile
          ? `calc(100%)`
          : `calc(100% - ${open ? 240 : 60}px)`,
        ml: `${open ? 240 : 60}px`,
        transition: 'width 0.3s, margin-left 0.3s',
        zIndex: theme.zIndex.appBar + 1,
      }}
    >
      <Toolbar style={{
                padding: "6px 24px",
                margin:"10px",
                background: "var(--paper)",
                boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
                borderRadius: "12px"
}}>
        <IconButton
          
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{padding:'14px',transform:'scale(0.85)', mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
            {/* Show Logo next to Menu Icon on mobile */}
      
        
        {/* Logo */}
        <Typography
  variant="body1"
  noWrap
  color="black"
  sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}
>
{renderIcon()}

  {gateway_details.name}
</Typography>
        <Box
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          sx={{
            boxShadow: "none"
          }}
        >
           {isDark ? (
          <Button
          onClick={() => setDarkMode(false)}
          style={{
            color: theme.palette.common.white,
            boxShadow:"none"
          }}
          variant="text">
         
          <WbSunnyOutlinedIcon />
          </Button>
           ) : 
           <Button
           onClick={() => setDarkMode(true)}
           style={{
             color: theme.palette.common.black,
             boxShadow:"none"
           }}
           variant="text">
           <Brightness2Icon />
           </Button>
           }
          {/* <Typography variant="caption" style={{color:"var(--md-sys-color-onPrimaryContainer) !important"}} onClick={logout}>
          Logout
                  </Typography> */}
        </Box>
     
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
