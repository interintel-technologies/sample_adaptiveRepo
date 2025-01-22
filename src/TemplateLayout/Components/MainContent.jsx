import React, { useEffect, useState } from 'react';
import { Stack, Box, Card } from '@mui/material';
import { useLocation } from 'react-router-dom';
import FormRender from '../../FormRender.jsx';

const MainContent = ({ pageGroups, open, drawerWidth }) => {
  const location = useLocation();
  const hash = location.pathname.split('/');

  const [currentPageGroupName, setCurrentPageGroupName] = useState(hash[1]);
  const [currentPageName, setCurrentPageName] = useState(hash[2]);
  const [pageSections, setPageSections] = useState(null);

  useEffect(() => {
    setCurrentPageGroupName(hash[1]);
    setCurrentPageName(hash[2]);
  }, [hash]);

  // Replace hyphens with spaces in currentPageGroupName and currentPageName
  const formattedPageGroupName = currentPageGroupName.replace(/-/g, ' ').toLowerCase();
  const formattedPageName = currentPageName.replace(/-/g, ' ').toLowerCase();

  // Filter pageGroups based on the formatted currentPageGroupName
  const filteredPageGroup = pageGroups.filter(
    (pageGroup) => pageGroup._title.replace(/-/g, ' ').toLowerCase() === formattedPageGroupName
  );

  // Filter pages inside the filteredPageGroup based on the current page name
  const filteredPage = filteredPageGroup.length
    ? filteredPageGroup[0]._tabs.filter(
        (page) => page._title.replace(/-/g, ' ').toLowerCase() === formattedPageName
      )
    : [];

  useEffect(() => {
    if (currentPageGroupName && pageGroups) {
      // If window.TEMPLATE is "service", only set the pageSections matching the currentPageName and currentPageGroupName
      if (window.TEMPLATE === 'service') {
        setPageSections(filteredPage); // This will only include sections matching the current page
      } else {
        
        setPageSections(filteredPageGroup.length ? filteredPageGroup[0]._tabs : []);
      }
    }
  }, [currentPageGroupName, currentPageName, pageGroups]);

  
  return (
    <>
      <Stack sx={{ width: '100%' }} spacing={0}>
        <div className="main-content">
          {pageSections &&
            pageSections.map((pageSection, indexSection) => (
              <section
                style={{ background: 'var(--md-sys-color-surfaceContainerLowest)' }}
                id={pageSection._title.toLowerCase()}
                key={indexSection}
              >
                {pageSection._feedList &&
                  pageSection._feedList.map((feed, indexFeed) => (
                    window.TEMPLATE === 'service' ? (
                      // Wrap FormRender in Box and Card when window.TEMPLATE is "service"
                      <Box
                        key={indexFeed}
                        component="main"
                        className="service-main"
                     
                      >
                        <Box
                         
                          
                          sx={{
                            
                            flexGrow: 1,
                            transition: 'margin-left 0.3s',
                            ml: `${open ? drawerWidth : 0}px`,
                            width: `calc(100% - ${open ? drawerWidth : 0}px)`,
                            overflowX: 'hidden',
                            
                         
                          }}
                        >
                          <FormRender
                            pageGroups={pageGroups}
                            feed={feed}
                            currentPageGroupName={currentPageGroupName}
                            setPageSections={setPageSections}
                          />
                        </Box>
                      </Box>
                    ) : (
                      // Render FormRender without the additional wrappers if not a "service"
                      <FormRender
                        key={indexFeed}
                        pageGroups={pageGroups}
                        feed={feed}
                        currentPageGroupName={currentPageGroupName}
                        setPageSections={setPageSections}
                      />
                    )
                  ))}
              </section>
            ))}
        </div>
      </Stack>
    </>
  );
};

export default MainContent;