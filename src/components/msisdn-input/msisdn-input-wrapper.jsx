import React, { useState, useEffect, useRef } from 'react';
import './msisdn-input';

const MsisdnInputWrapper = ({ element}) => {
  
  const msisdnInputRef = useRef(null);

  useEffect(() => {
    if (msisdnInputRef.current && element) {
      if (msisdnInputRef.current.e !== element) {
        msisdnInputRef.current.e = element;
      }

    }
  }, [element]);

  return (
    <>
     
      {element ? (
        <msisdn-input style={{padding:"0.73rem 0"}} id="msisdn-input" ref={msisdnInputRef}></msisdn-input>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default MsisdnInputWrapper;
