import React, { useEffect, useRef } from 'react';
import './product-price-comparison';
import withDataSource from '../../core/mixins/datasource-mixin';


const productPriceComparisonWrapper = (props) => {
  const { element, rows, cols } = props;
  const productPriceComparisonRef = useRef(null);

  useEffect(() => {
    
    if (productPriceComparisonRef.current && element) {
      productPriceComparisonRef.current.e = element;
      productPriceComparisonRef.current.rows = rows;
      productPriceComparisonRef.current.cols = cols;

    }
  }, [element, rows, cols]);

  return (
    <div>
     
      {element ? (
        <product-price-comparison id="product-price-comparison" ref={productPriceComparisonRef}></product-price-comparison>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(productPriceComparisonWrapper);
