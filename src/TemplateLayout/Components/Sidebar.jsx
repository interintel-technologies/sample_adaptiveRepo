import React, { useEffect, useState } from 'react';
import {
  Drawer, List, ListItem, ListItemText, Divider, Collapse, IconButton,
  Box, ListItemButton, ListItemIcon, Typography,
  useMediaQuery, Tooltip,
  Avatar,
  Button,
  Popover
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NavLink, useLocation } from 'react-router-dom';
import '../../components/adaptive-ui-icon';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const drawerWidth = 240;
const mobileDrawerWidth = '100%';

const _processInitials=(name)=> {
  const words = name.trim().split(/\s+/).filter(Boolean);

  // Extract the first letter of each word and combine them into initials
  const initials = words.map(word => word[0].toUpperCase()).join('');

  return initials;
}

const Sidebar = ({
  profile,open, logo, handleDrawerClose, pageGroups,
  openDropdown, handleClick, gateway_details
}) => {
  const location = useLocation();
  const theme = useTheme(); // Access the Material-UI theme
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is small (mobile)
  const [hovered, setHovered] = useState(null); // Track hovered state
  const [popoverGroupIndex, setPopoverGroupIndex] = useState(null); 
  const [expanded, setExpanded] = useState({});

  const logout = (event) => { 
    event.preventDefault();
    window.location = '/logout/';
}

  const handleExpandClick = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState(null);

  const handlePopoverOpen = (event, groupIndex) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(pageGroups[groupIndex].tabs);
    setAnchorEl(event.currentTarget); // Set the anchor element
    setPopoverGroupIndex(groupIndex); // Set the group index for tracking
    setOpenPopover(true); // Open the popover
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverContent(null);
  };

  const openPopover = Boolean(anchorEl);


  useEffect(() => {
    const currentPath = location.pathname;
    const sectionId = currentPath.split('/').pop(); // Get the last part of the path as the ID
    const sectionElement = document.getElementById(sectionId);
    
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  let isDark = theme.palette.mode === "dark";

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  // Update the CSS variable based on the theme mode
  if (isDark) {
    // Set the icon stroke color for dark mode
    document.documentElement.style.setProperty('--adaptive-ui-icon-stroke-color', theme.palette.common.white); // Example color for dark mode
  } else {
    // Set the icon stroke color for light mode
    document.documentElement.style.setProperty('--adaptive-ui-icon-stroke-color','#8E8E93' ); // Example color for light mode
  }

  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Drawer
      variant="permanent"
      open={open}
      onClose={isMobile ? handleDrawerClose : undefined} // Close drawer on mobile if open
      style={{background:'var(--md-sys-color-secondaryContainer)'}}
      sx={{
        boxShadow: theme.shadows[3],
        width: open ? (isMobile ? mobileDrawerWidth : drawerWidth) : (isMobile ? 0 : 60),
        flexShrink: 0,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
         borderRadius:"16px",
           transition: 'width 0.3s ease-in-out',
        [`& .MuiDrawer-paper`]: {
          width: open ? (isMobile ? mobileDrawerWidth : drawerWidth) : (isMobile ? 0 : 60),
             transition: 'width 0.3s ease-in-out',
          overflowX: 'hidden',
          overflowY: 'hidden',
          background:  theme.palette.background.paper,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: theme.shadows[3],
          borderTopRightRadius:"16px",
          borderTopLeftRadius:"16px",
          background: "linear-gradient(180deg, var(--md-sys-color-secondaryContainer) 0%, var(--paper) 100%) !important"
          
        },
      }}
    >
      {/* Logo at the top */}
      <Box 
        sx={{ 
          position: 'sticky', top: 0, zIndex: 1, }} >
        <Box
         
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}>
          <img
            width={open ? 154 : 50}
            height={open ? 64 : 50}
            src={logo}
            alt="Logo"
            style={{
              transition: 'width var(--transition-duration), height var(--transition-duration)',
              objectFit: 'contain',
            }}
          />
        </Box>
        {open && (
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              position: 'absolute',
              right: '-7px',
              background: "#fff",
               transition: 'width 0.3s ease-in-out',
              transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: '22%',
              padding:"2px"
            }}
          >
           <ChevronLeftIcon sx={{ color: "var(--primary)" }} />
          </IconButton>
        )}
      </Box>

      {/* Sidebar content with overflow */}
      <Box 
        sx={{
          overflowY: 'auto',
          overflowX: 'hidden',
          flexGrow: 1,
          padding: open ? '0px 6px 0px 6px' : '0px',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}>
        {/* <Typography
          sx={{
            fontSize: '10px',
            fontWeight: '500',
            color: `${isDark ? theme.palette.common.white : '#8E8E93'} !important`, // Updated color logic
            p: 2,
            textAlign: open ? 'left' : 'center',
          }}
        >
          

          {profile && <>{open ? <>{profile.access_level} </> : truncateText( profile.access_level, 3) }</>}
        </Typography> */}
<div style={{ display: 'flex', alignItems: 'center' }}>

  <div className="avatar"
  
  style={{ 
    boxShadow: theme.shadows[3],
    background: "white",
    width: 34,
    height: 34,
    display: "flex",
    flexdirection: "row",
    justifycontent: "center",
    alignitems: "center",
    padding: "12px 15px",
    width: "51px",
    height: "48px",
    /* M3/Elevation Light/1 */
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
    borderRadius: "50%",
    /* Inside auto layout */
    flex: "none",
    order: "0",
    flexGrow: "0",
    color:"black"

  }} 
  >
 {`${profile?.first_name[0]}${profile?.last_name[0]}`}
  </div>
  
  {open && (
  <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
    <span style={{ fontSize: '0.875rem',color:"var(--md-sys-color-outline)" }}>Hello 👋</span>
    <span style={{
      fontSize: '0.875rem',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '90%', // Adjust max width as necessary
      fontWeight: '400'
    }}>
      {profile && `${profile?.first_name} ${profile?.last_name}`}
    </span>
  </div>
  )}
</div>

<List>
  {pageGroups && pageGroups.map((pagegroup, groupIndex) => (
    <div key={groupIndex}>
      <ListItem
        onClick={(event) => { 
          handleExpandClick(groupIndex); 
          handleClick(groupIndex); 
          if (!open) handlePopoverOpen(event, groupIndex); 
        }}
        sx={{
          cursor: "pointer",
          color: openDropdown[groupIndex] ? theme.palette.common.white : (isDark ? theme.palette.common.white : "#8E8E93"),
          fontWeight: `500 !important`,
          fontSize: '14px !important',
          boxShadow: openDropdown[groupIndex] ? `0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)` : 'none',
          background: openDropdown[groupIndex] ? theme.palette.primary.main : "none",
          borderRadius: '8px',
          '&:hover': {
            color: theme.palette.common.white,
            background: theme.palette.primary.main,
            boxShadow: `0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)`,
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: open ? 40 : 24 }}>
          <adaptive-ui-icon
            dataColor={hovered === groupIndex || expanded[groupIndex] ? theme.palette.common.white : (isDark ? theme.palette.common.white : '#8E8E93')}
            style={{ width: 24, height: 24 }}
            icon={pagegroup._icon || 'icons:MdInfo'}
          />
        </ListItemIcon>
        {open && (
          <ListItemText
            className={open ? `open truncated-text` : `closed truncated-text`}
            primary={truncateText(pagegroup._title, 10)}
          />
        )}
        {open && (openDropdown[groupIndex] ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>

      <Collapse   in={openDropdown[groupIndex]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {pagegroup.tabs.map((tab, tabIndex) => (
          
              <ListItemButton
                component={NavLink}
                to={`/${pagegroup._title.replace(/ /g, '-').toLowerCase()}/${tab._title.replace(/ /g, '-').toLowerCase()}`}
                sx={{
                  cursor: "pointer",
                  borderRadius: '12px',
                  mb: 1,
                  width: '85%',
                  marginLeft: 'auto',
                  pl: open ? 2 : 0.5,
                  mt: 1,
                  backgroundColor: location.pathname === tab.path ? theme.palette.primary.main : 'transparent',
                  color: location.pathname === tab.path ? theme.palette.common.white : (isDark ? theme.palette.common.white : "#8E8E93"),
                  fontSize: open ? 'inherit' : '10px',
                  '&:hover': {
                    color: theme.palette.common.white,
                    background: theme.palette.primary.main,
                  },
                }}
                onMouseEnter={() => setHovered(`${groupIndex}-${tabIndex}`)}
                onMouseLeave={() => setHovered(null)}
              >
               <Tooltip title={!open ? tab._title : ''} arrow>
               <ListItemText
                  sx={{
                    px: open ? 0 : 1 // Apply padding only when `open` is false
                  }}
                  className={open ? 'open truncated-text' : 'closed truncated-text'}
                  primary={open ? truncateText(tab._title, 20) : truncateText(tab._title, 2)}
                />
            </Tooltip>
              </ListItemButton>
       
          ))}
        </List>
      </Collapse>

      {/* {!open && !isMobile && (
  <Popover
    open={openPopover && popoverGroupIndex === groupIndex && openDropdown[groupIndex]}
    anchorEl={anchorEl}
    onClose={handlePopoverClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
  >
    <Typography
      style={{
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        boxShadow: "0px 64px 64px rgba(94, 94, 94, 0.25)",
        backdropFilter: "blur(75px)",
        borderRadius: "12px",
      }}
      sx={{ p: 2 }}
    >
       <List component="div" disablePadding>
        
       </List>
      {pagegroup.tabs.map((tab, index) => (
        <NavLink
          style={{
            color: theme.palette.common.white,
            textDecoration: 'none',
            display: 'block', // Ensures each link is on its own line
            marginBottom: theme.spacing(1), // Adds spacing between links if needed
          }}
          to={`/${pagegroup._title.replace(/ /g, '-').toLowerCase()}/${tab._title.replace(/ /g, '-').toLowerCase()}`}
          key={index}
        >
          {tab.title}
        </NavLink>
      ))}
    </Typography>
  </Popover>
)} */}

    </div>
  ))}
</List>

        <Divider />
                

      </Box>
      {open ? (
  <div
    style={{
      padding: "0.5rem",
    }}
  >
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "15px 24px",
        height: "auto", // Adjust to fit the content without overflow
        background: "rgba(255, 255, 255, 0.2)",
        border: "0.5px dashed #6F3983",
        borderRadius: "12px",
        flex: "none",
        order: "5",
        flexGrow: "0",
        zIndex: 5,
        margin: "0",
        textAlign: "center",
      }}
    >


      <Typography
        variant="body2"
        sx={{
          fontSize: "0.75rem",
          marginTop: "5px",
          whiteSpace: "normal", // Allow line wrap
          textAlign: "center", // Center align text
          width: "100%", // Full width
          color:"var(--md-sys-color-outline) !important"
        }}
      >
         Go to Home Page
      </Typography>

      <Button
        variant="contained"
        sx={{
          borderRadius: "var(--CornerMedium)",
          backgroundColor: "var(--md-sys-color-inversePrimary)",
          color: "var(--md-sys-color-inverseOnSurface)",
          marginTop: "10px",
          width: "100%",
          textTransform:"capitalize"
        }}
        onClick={logout}
      >
        <CloseIcon />
        Exit
      </Button>
    </div>
  </div>): (
    
    <div
    style={{
      padding: "0.5rem",
    }}
  >
    <Button
        variant="contained"
        sx={{
          borderRadius: "var(--CornerMedium)",
          backgroundColor: "var(--md-sys-color-inversePrimary)",
          
          color: "var(--md-sys-color-inverseSurface)",
          marginTop: "10px",
          maxWidth: "100% !important",
          minWidth: "100% !important",

          textTransform:"capitalize"
        }}
        onClick={logout}
      >
        <CloseIcon />
        
      </Button>
      </div>
)}


    </Drawer>
  );
};

export default Sidebar;
