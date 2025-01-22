import React, { useEffect, useRef } from 'react';
import './barcode-scanner';

const barcodeScannerWrapper = (props) => {
  const { element } = props;
  
  console.log("element barcode scanner ",element);
  
  
  const barcodeScannerRef = useRef(null);

  useEffect(() => {
    
    if (barcodeScannerRef.current && element) {
      barcodeScannerRef.current.e = element;

    }
  }, [element]);

  return (
    <div>
     
      {element ? (
        <barcode-scanner id="barcode-scanner" ref={barcodeScannerRef}></barcode-scanner>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default barcodeScannerWrapper;