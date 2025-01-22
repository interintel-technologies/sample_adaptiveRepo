import React, { useEffect, useRef } from 'react';
import './invoice-element';

const InvoiceElement = ({ element }) => {
  console.log("element is ",element);
  
  const heroElementRef = useRef(null);

  useEffect(() => {
    if (heroElementRef.current && element) {
      heroElementRef.current.e = element;

      console.log('Element set in useEffect:', element);

    }
  }, [element]);

  return (
    <>
      {element ? (
        <invoice-element id="invoice-element" ref={heroElementRef}></invoice-element>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default InvoiceElement;
