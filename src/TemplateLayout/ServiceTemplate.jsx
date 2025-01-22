import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Components/Sidebar.jsx';
import withTemplate from '../core/mixins/template-mixin';
import { Route, HashRouter as Router, Routes } from 'react-router-dom'; // Use HashRouter
import Page from './Components/Page.jsx';
import TopBar from './Components/Topbar.jsx';
import NotFoundTemplate from './NotFoundTemplate.jsx';

const ServiceTemplate = (props) => {
  const [open, setOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (groupIndex) => {
    setOpenDropdown((prevState) => {
      const updatedDropdown = [...prevState];
      updatedDropdown[groupIndex] = !updatedDropdown[groupIndex];
      return updatedDropdown;
    });
  };

  
  return (
    <div className="service-template-wrapper">
      <Router>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <Sidebar
            open={open}
            handleDrawerClose={handleDrawerClose}
            openDropdown={openDropdown}
            handleClick={handleClick}
            darkMode={props.isdarkMode}
            setDarkMode={props.setDarkMode}
            gateway={props.adaptiveUI?.gateway}
            pageGroups={props.pageGroups}
            template={props.template}
            logo={props.logo}
            profile={props.gatewayData._response?.profile}
            gateway_details={props.gatewayData._response}
          />

<TopBar
        open={open}
        logo={props.logo}
        handleDrawerOpen={handleDrawerOpen}
        darkMode={props.isdarkMode}
        setDarkMode={props.setDarkMode}
        profile={props.gatewayData._response?.profile}
        gateway_details={props.gatewayData._response}
      /> 

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 0,
              maxWidth: open ? 'calc(100vw - 240px)' : '95vw',
              marginTop: '64px',  // Adjust based on TopBar height (e.g., 64px)
              position: 'relative',
            }}
          >
           
            <Routes>
              {/* Use element prop to render the Page component */}
              <Route path="/:groupName/:pageName" element={<Page template="service" pageGroups={props.pageGroups} />} />
              <Route path="*" element={<NotFoundTemplate/>} />

             
            </Routes>
          </Box>
        </Box>
      </Router>
    </div>
  );
};

export default withTemplate(ServiceTemplate);
