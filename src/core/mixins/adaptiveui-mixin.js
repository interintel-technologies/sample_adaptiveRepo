import React, { useState, useEffect, forwardRef } from 'react';
import { COMMAND_GET_GATEWAY_DETAILS, COMMAND_GET_INSTITUTION_DETAILS, COMMAND_GET_INTERFACE, COMMAND_GET_SECTION, Response } from '../parsers/response';
import NotFoundTemplate from '../../TemplateLayout/NotFoundTemplate';

export const computePage = (getSection) => {
  
  
  const pageGroup = getSection.pageGroups[0];
  const title = pageGroup.title;
  return pageGroup.getTab(0);
};

export const computeLogo = (gateway) => {
  let defaultUrl = 'https://ui-avatars.com/api/?background=FFFFFF&name=' + gateway.name;
  if (gateway.icon_image) {
    defaultUrl = `/media/${gateway.iconImage}`;
  }
  if (gateway.logo) {
    defaultUrl = `/media/${gateway.logo}`;
  }
  if (gateway.logo == null || gateway.icon_image == null) {
    defaultUrl = 'https://interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png';
  }
  return defaultUrl;
};

// Utility function to parse payload
export const parsePayload = (payload) => {
  const response = new Response(payload);
  response.parseAll({});
  return response;
};

// Function to get gateway details or institution details from payload
export const gatewaySelector = (payload) => {
  const parsed = parsePayload(payload);
  return parsed.serviceCommands[COMMAND_GET_GATEWAY_DETAILS] ||
    parsed.serviceCommands[COMMAND_GET_INSTITUTION_DETAILS];
};

// Function to get interface or section details from payload
export const interfaceSelector = (payload) => {
  const parsed = parsePayload(payload);
  return parsed.serviceCommands[COMMAND_GET_INTERFACE] || parsed.serviceCommands[COMMAND_GET_SECTION];
};

// Function to get section details from payload
export const sectionSelector = (payload) => {
  const parsed = parsePayload(payload);
  return parsed.serviceCommands[COMMAND_GET_SECTION];
};

// Function to get current page group from pageGroup index
export const currentPageGroupSelector = (pageGroup) => {
  const index = Number(pageGroup);
  if (index >= (interfaceData.pageGroups || []).length) return null;
  return interfaceData.pageGroups[index];
};

// Function to get current page from page index and pageGroup
export const currentPageSelector = (page, pageGroup, interfaceData) => {
  const index = Number(page);
  const currentGroup = currentPageGroupSelector(pageGroup, interfaceData);
  if (currentGroup === null || index >= (currentGroup.pages || []).length) return null;
  return currentGroup.pages[index];
};

const withAdaptiveUI = (WrappedComponent) => {
  const AdaptiveUIHOC = forwardRef((props, ref) => {
    const [pageGroup, setPageGroup] = useState(0);
    const [page, setPage] = useState(0);
    const [currentPageGroup, setCurrentPageGroup] = useState(null); // Start with null for loading state
    const [currentPage, setCurrentPage] = useState(null); // Same here
    const [isLoading, setIsLoading] = useState(true); // Add a loading state
    const pGroups = interfaceSelector(window.parsed_payload)._pageGroups;
    const [offline, setOffline] = useState(false);
    const interfaceData = interfaceSelector(window.parsed_payload);
    const gatewayData = gatewaySelector(window.parsed_payload);
    const view = 'DEFAULT';

    useEffect(() => {
      const id = interfaceSelector(window.parsed_payload);
      const formattedPageGroupName = window.location.hash.split('/')[1].replace(/ /g, '-').toLowerCase();
      const formattedPageName = window.location.hash.split('/')[2].replace(/ /g, '-').toLowerCase();

      const currentPG = id._pageGroups.find(
        (pageGroup) => pageGroup._title.replace(/ /g, '-').toLowerCase() === formattedPageGroupName
      );

      const currentP = currentPG?.pages.find(
        (page) => page._title.replace(/ /g, '-').toLowerCase() === formattedPageName
      );

      setCurrentPageGroup(currentPG);
      setCurrentPage(currentP);
      setIsLoading(false); // Set loading to false when data is ready
    }, []);

    // Show a loading indicator while matching routes
    if (isLoading) {
      return <></>; // Replace with your custom loading spinner if needed
    }

    // Show the NotFound page if there is no current page group or page
    if (!currentPageGroup || !currentPage) {
      return <NotFoundTemplate />;
    }

    return (
      <WrappedComponent
        {...props}
        ref={ref} // Forwarding ref to the WrappedComponent
        pageGroup={pageGroup}
        page={page}
        interfaceData={interfaceData}
        gatewayData={gatewayData}
        offline={offline}
        sectionSelector={sectionSelector}
        computePage={computePage}
        currentPageGroup={currentPageGroup}
        currentPage={currentPage}
        pageGroups={pGroups}
      />
    );
  });

  return AdaptiveUIHOC;
};

export default withAdaptiveUI;
