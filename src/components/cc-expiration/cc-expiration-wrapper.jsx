import React, { useEffect, useRef } from 'react';
import './cc-expiration';

const CccExpirationWrapper = ({ element}) => {
  const ccExpirarionRef = useRef(null);

  useEffect(() => {
    if (ccExpirarionRef.current && element) {
      ccExpirarionRef.current.e = element;
 
   
    }
  }, [element]);

  return (
    <>
      {element ? (
        <cc-expiration id="cc-expiration" ref={ccExpirarionRef}></cc-expiration>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default CccExpirationWrapper;
