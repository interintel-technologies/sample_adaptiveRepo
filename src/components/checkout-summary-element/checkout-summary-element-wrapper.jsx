import React, { useState, useEffect, useRef } from 'react';
import './checkout-summary-element';

const CheckOutSummaryWrapper = ({ element}) => {
  
  const checkoutsummaryRef = useRef(null);

  useEffect(() => {
    if (checkoutsummaryRef.current && element) {
      if (checkoutsummaryRef.current.e !== element) {
        checkoutsummaryRef.current.e = element;
      }
      
    
    }
  }, [element]);

  return (
    <>
     
      {element ? (
        <checkout-summary-element id="checkout-summary-element" ref={checkoutsummaryRef}></checkout-summary-element>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default CheckOutSummaryWrapper;
