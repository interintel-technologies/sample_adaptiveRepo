import React, { useEffect, useRef } from 'react';
import './menu-service-button';

const menuServiceButtonWrapper = ({ element }) => {

  
  const menuServiceButtonRef = useRef(null);

  useEffect(() => {
    if (menuServiceButtonRef.current && element) {
      menuServiceButtonRef.current.e = element;
    }
  }, [element]);

  return (
    <>
      {element ? (
        <menu-service-button id="menu-service-button" ref={menuServiceButtonRef}></menu-service-button>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default menuServiceButtonWrapper;
