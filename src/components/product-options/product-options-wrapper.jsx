import React, { useEffect, useRef } from 'react';
import './product-options';
import withDataSource from '../../core/mixins/datasource-mixin';

const productOptionsWrapper = (props) => {
  const { element, rows, paramsCallback } = props;
  const productOptionsRef = useRef(null);

  useEffect(() => {
    
    if (productOptionsRef.current && element) {
      productOptionsRef.current.e = element;
      productOptionsRef.current.rows = rows;
    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <product-options id="product-options" ref={productOptionsRef}></product-options>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(productOptionsWrapper);
