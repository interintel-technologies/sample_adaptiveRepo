import React, { useState, useEffect, useRef } from 'react';
import './add-product-service';

const addProductService = ({ submitForm,element}) => {
  
  const addProductServiceRef = useRef(null);

  useEffect(() => {
    if (addProductServiceRef.current && element) {
      if (addProductServiceRef.current.e !== element) {
        addProductServiceRef.current.e = element;
        addProductServiceRef.current.submitForm = submitForm
      }

    
    }
  }, [element]);

  return (
    <>
     
      {element ? (
        <add-product-service id="add-product-service" ref={addProductServiceRef}></add-product-service>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default addProductService;
