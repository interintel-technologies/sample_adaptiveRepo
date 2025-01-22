import React, { useEffect, useRef } from 'react';
import './fingerprint-element';


const FingerPrintElementWrapper = ({ element }) => {
  const fingerprintRef = useRef(null);

  useEffect(() => {
    if (fingerprintRef.current && element) {
      fingerprintRef.current.e = element;

    }
  }, [element]);

  return (
    <>
      {element  ? (
        <fingerprint-element style={{display:"none"}} id="fingerprint-element" ref={fingerprintRef}></fingerprint-element>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default FingerPrintElementWrapper;
