import React, { useState, useEffect, useRef } from 'react';
import './print-button';

const PrintButtonWrapper = ({ element }) => {

  const PrintButtonRef = useRef(null);

  useEffect(() => {
    const PrintButton = PrintButtonRef.current;

    if (PrintButton && element) {
      PrintButton.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <print-button id="print-button" ref={PrintButtonRef}></print-button>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default PrintButtonWrapper;
