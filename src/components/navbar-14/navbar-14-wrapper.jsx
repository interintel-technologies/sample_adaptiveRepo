import React, { useState, useEffect, useRef } from 'react';
import './navbar-14';
import withTemplate from '../../core/mixins/template-mixin';
import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'; // Importing useNavigate for route changes
import { gatewaySelector, interfaceSelector } from '../../core/mixins/adaptiveui-mixin';

const Navbar14Wrapper = ({ element}) => {
  const pageGroups = interfaceSelector(window.parsed_payload)._pageGroups
  const gatewayData = gatewaySelector(window.parsed_payload)
  const { groupName } = useParams();

  const navbarElementRef = useRef(null);
  const logo = gatewayData._response?.logo;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate(); // React Router's navigate hook for route changes

  useEffect(() => {
    if (navbarElementRef.current && element) {
      if (navbarElementRef.current.e !== element) {
        navbarElementRef.current.e = element;
      }
      if (navbarElementRef.current && gatewayData) {
        navbarElementRef.current.logo = logo;
      }
      if (navbarElementRef.current.pageGroups !== pageGroups) {
        navbarElementRef.current.pageGroups = pageGroups;
      }

      if (navbarElementRef.current._pageGroup !== groupName) {
        navbarElementRef.current._pageGroup = groupName;
      }

      const handleToggleDrawer = () => {
        setIsDrawerOpen((prev) => !prev);
      };

      navbarElementRef.current.addEventListener('toggle-drawer', handleToggleDrawer);

      return () => {
        if (navbarElementRef.current) {
          navbarElementRef.current.removeEventListener('toggle-drawer', handleToggleDrawer);
        }
      };
    }
  }, [element, pageGroups, gatewayData, groupName]);

  // Function to handle navigation and smooth scrolling
  const handleNavLinkClick = (event, targetPageGroup, targetPage) => {
    const targetElement = event.target;
    const selectedPageGroup = targetPageGroup;
    const selectedPage = targetPage;
    const menuId = targetElement.getAttribute('data-name');

    if (groupName === selectedPageGroup) {
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
          <navbar-14 id="navbar-14" ref={navbarElementRef}></navbar-14>

          {/* Material-UI Drawer */}
          <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <div style={{ width: 240 }}>
              {/* Drawer Content */}
              <List>
                {pageGroups.map((pageGroup, index) => (
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

export default withTemplate(Navbar14Wrapper);
