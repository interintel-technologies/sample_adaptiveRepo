import React, { useEffect, useRef } from 'react';
import './download-button';

const DownloadButtonWrapper = ({ element }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current && element) {
      buttonRef.current.e = element;
      
    }
  }, [element]);

  return (
    <>
      {element ? (
        <download-button ref={buttonRef}></download-button>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default DownloadButtonWrapper;
