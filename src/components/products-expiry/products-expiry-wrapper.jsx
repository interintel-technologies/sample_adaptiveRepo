import React, { useEffect, useRef } from 'react';
import './products-expiry';
import withDataSource from '../../core/mixins/datasource-mixin';

const productsExpiryWrapper = (props) => {
  const { element, rows, paramsCallback } = props;
  const productsExpiryRef = useRef(null);

  useEffect(() => {
    
    if (productsExpiryRef.current && element) {
      productsExpiryRef.current.e = element;
      productsExpiryRef.current.rows = rows;
    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <products-expiry id="products-expiry" ref={productsExpiryRef}></products-expiry>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(productsExpiryWrapper);
