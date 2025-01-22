import React, { useState, useEffect, useRef } from 'react';
import { Box, Modal, Typography } from '@mui/material';
import './icons-display';

const IconsDisplayWrapper = ({ element }) => {




  const heroElementRef = useRef(null);

  useEffect(() => {
    const heroElement = heroElementRef.current;

    if (heroElement && element) {
      heroElement.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <icons-display id="icons-display" ref={heroElementRef}></icons-display>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default IconsDisplayWrapper;
