import React, { useState, useEffect, useRef } from 'react';
import './product-variant';

const ProductVariantWrapper = ({ element }) => {

  const ProductVariantRef = useRef(null);
  
  useEffect(() => {
    const ProductVariant = ProductVariantRef.current;

    if (ProductVariant && element) {
      ProductVariant.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <product-variant id="product-variant" ref={ProductVariantRef}></product-variant>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default ProductVariantWrapper;
