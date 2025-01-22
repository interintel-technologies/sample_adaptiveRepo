import React, { useState, useEffect, useRef } from 'react';
import './navbar-13';
import withTemplate from '../../core/mixins/template-mixin';
import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for route changes
import { gatewaySelector } from '../../core/mixins/adaptiveui-mixin';

const Navbar13Wrapper = ({ element, pageGroups, currentPageGroupName, gatewayData }) => {
  const parsedPageGroups = JSON.parse(pageGroups);
  const gatewayDetails =  gatewaySelector(window.parsed_payload)._response
  const navbar15ElementRef = useRef(null);
  const logo = gatewayData._response?.logo;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate(); // React Router's navigate hook for route changes

  useEffect(() => {
    if (navbar15ElementRef.current && element) {
      if (navbar15ElementRef.current.e !== element) {
        navbar15ElementRef.current.e = element;
      }
      if (navbar15ElementRef.current && gatewayData) {
        navbar15ElementRef.current.logo = logo;
      }
      if (navbar15ElementRef.current.pageGroups !== parsedPageGroups) {
        navbar15ElementRef.current.pageGroups = parsedPageGroups;
      }

      if (navbar15ElementRef.current._pageGroup !== currentPageGroupName) {
        navbar15ElementRef.current._pageGroup = currentPageGroupName;
      }

      if (navbar15ElementRef.current.gateway !== gatewayDetails) {
        navbar15ElementRef.current.gateway = gatewayDetails;
      }


      

      const handleToggleDrawer = () => {
        setIsDrawerOpen((prev) => !prev);
      };

      navbar15ElementRef.current.addEventListener('toggle-drawer', handleToggleDrawer);

      return () => {
        if (navbar15ElementRef.current) {
          navbar15ElementRef.current.removeEventListener('toggle-drawer', handleToggleDrawer);
        }
      };
    }
  }, [element, parsedPageGroups, gatewayData, currentPageGroupName]);

  // Function to handle navigation and smooth scrolling
  const handleNavLinkClick = (event, targetPageGroup, targetPage) => {
    const targetElement = event.target;
    const selectedPageGroup = targetPageGroup;
    const selectedPage = targetPage;
    const menuId = targetElement.getAttribute('data-name');

    if (currentPageGroupName === selectedPageGroup) {
      // Smooth scroll to the section if the page group matches
      const navHeight = document.querySelector('.navbar').offsetHeight; // Adjust if necessary for dynamic navbar height
      const mainContent = document.querySelector('.main-content');

      if (mainContent) {
        const selectedElement = mainContent.querySelector(`#${menuId}`);
        if (selectedElement) {
          // Scroll to the element smoothly
          selectedElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Adjust for navbar height
          window.scrollBy(0, -navHeight);
        } else {
          console.error(`Element with ID ${menuId} not found.`);
        }
      } else {
        console.error('Main content element not found.');
      }
    } else {
      // If the page group does not match, change the route
      navigate(`/${selectedPageGroup}/${selectedPage}`);
    }

    setIsDrawerOpen(false); // Close drawer after clicking link
  };

  return (
    <>
      {element ? (
        <>
          {/* Render the LitElement component */}
          <navbar-13 id="navbar-13" ref={navbar15ElementRef}></navbar-13>

          {/* Material-UI Drawer */}
          <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <div style={{ width: 240 }}>
              {/* Drawer Content */}
              <List>
                {parsedPageGroups.map((pageGroup, index) => (
                  <React.Fragment key={index}>
                    {pageGroup._tabs.map((menu, menuIndex) => (
                      <ListItem
                        button
                        key={menuIndex}
                        data-name={menu._title.replace(/ /g, '-').toLowerCase()}
                        onClick={(event) => handleNavLinkClick(event, pageGroup._title.replace(/ /g, '-').toLowerCase(), menu._title.replace(/ /g, '-').toLowerCase())}
                      >
                        <ListItemText primary={menu._title} />
                      </ListItem>
                    ))}
                  </React.Fragment>
                ))}
              </List>
            </div>
          </Drawer>
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withTemplate(Navbar13Wrapper);
