import React, { useEffect, useRef } from 'react';
import './purchase-order-editor';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const purchaseOrderEditorWrapper = (props) => {
  const { element, rows, paramsCallback } = props;
  const purchaseOrderEditorRef = useRef(null);

  useEffect(() => {
    
    if (purchaseOrderEditorRef.current && element) {
      purchaseOrderEditorRef.current.e = element;
      purchaseOrderEditorRef.current.rows = rows;
    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <purchase-order-editor id="purchase-order-editor" ref={purchaseOrderEditorRef}></purchase-order-editor>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(purchaseOrderEditorWrapper);
