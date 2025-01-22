import React, { useEffect, useRef } from 'react';
import './message-summary';

const messageSummaryWrapper = ({ element }) => {
  console.log("elements ",element);
  
  
  const messageSummaryRef = useRef(null);

  useEffect(() => {
    if (messageSummaryRef.current && element) {
      messageSummaryRef.current.e = element;
    }
  }, [element]);

  return (
    <>
      {element ? (
        <message-summary id="message-summary" ref={messageSummaryRef}></message-summary>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default messageSummaryWrapper;
