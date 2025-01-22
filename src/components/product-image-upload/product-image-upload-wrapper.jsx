import React, { useEffect, useRef } from 'react';
import './product-image-upload';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const productImageUploadWrapper = (props) => {
  const { element, rows, paramsCallback } = props;
  const productImageUploadRef = useRef(null);

  useEffect(() => {
    
    if (productImageUploadRef.current && element) {
      productImageUploadRef.current.e = element;
      productImageUploadRef.current.rows = rows;
    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <product-image-upload id="product-image-upload" ref={productImageUploadRef}></product-image-upload>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(productImageUploadWrapper);
