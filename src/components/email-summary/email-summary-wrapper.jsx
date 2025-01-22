import React, { useEffect, useRef } from 'react';
import './email-summary';

const EmailSummaryWrapper = ({ element }) => {
  
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current && element) {
      buttonRef.current.e = element;
    }
  }, [element]);

  return (
    <>
      {element ? (
        <email-summary ref={buttonRef}></email-summary>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default EmailSummaryWrapper;
