import React, { useEffect, useRef } from 'react';
import './vendor-badges';



const VendorBadgesWrapper = ({ element }) => {
  const vendorBagesRef = useRef(null);

  useEffect(() => {
    if (vendorBagesRef.current && element) {
      vendorBagesRef.current.e = element;
    }
  }, [element]);

  return (
    <div>
      {element ? <vendor-badges id="vendor-badges" ref={vendorBagesRef}></vendor-badges> : <p>Loading data...</p>}
    </div>
  );
};

export default VendorBadgesWrapper;
