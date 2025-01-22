import React, { useEffect, useRef } from 'react';
import './discounted-products';
import withDataSource from '../../core/mixins/datasource-mixin';

const DiscountedProductsWapper = ({ element, rows, cols }) => {
  const discountedProductsRef = useRef(null);

  useEffect(() => {
    if (discountedProductsRef.current && element) {
      discountedProductsRef.current.e = element;
      discountedProductsRef.current.rows = rows;
      discountedProductsRef.current.cols = cols;

    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <discounted-products id="discounted-products" ref={discountedProductsRef}></discounted-products>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(DiscountedProductsWapper);
