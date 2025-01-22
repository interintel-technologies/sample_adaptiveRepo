import React, { useEffect, useRef } from 'react';
import './products-element';
import withDataSource from '../../core/mixins/datasource-mixin';


const productsElementWrapper = (props) => {
  const { element, rows,cols, paramsCallback } = props;
  const productsElementRef = useRef(null);

  useEffect(() => {
    
    if (productsElementRef.current && element) {
      productsElementRef.current.e = element;
      productsElementRef.current.rows = rows;
      productsElementRef.current.cols = cols;
    }
  }, [element, rows,cols, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <products-element id="products-element" ref={productsElementRef}></products-element>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(productsElementWrapper);
