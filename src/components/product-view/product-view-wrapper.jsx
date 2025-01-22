import React, { useEffect, useRef } from 'react';
import './product-view';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const productViewWrapper = (props) => {
  const { element, rows } = props;
  const productViewRef = useRef(null);

  useEffect(() => {
    
    if (productViewRef.current && element) {
      productViewRef.current.e = element;
      productViewRef.current.rows = rows;
    }
  }, [element, rows, props]);

  return (
    <div>
     
      {element ? (
        <product-view id="product-view" ref={productViewRef}></product-view>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(productViewWrapper);
