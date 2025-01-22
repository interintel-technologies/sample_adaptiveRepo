import React, { useEffect, useRef } from 'react';
import './nenasasa-reseller-user-manual';

const nenasasaResellerUserManualWrapper = ({ element }) => {

  
  const nenasasaResellerUserManualRef = useRef(null);

  useEffect(() => {
    if (nenasasaResellerUserManualRef.current && element) {
      nenasasaResellerUserManualRef.current.e = element;
    }
  }, [element]);

  return (
    <>
      {element ? (
        <nenasasa-reseller-user-manual id="nenasasa-reseller-user-manual" ref={nenasasaResellerUserManualRef}></nenasasa-reseller-user-manual>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default nenasasaResellerUserManualWrapper;
