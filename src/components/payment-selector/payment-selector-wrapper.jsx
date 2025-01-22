import React, { useEffect, useRef } from 'react';
import './payment-selector';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const paymentSelectorWrapper = (props) => {
  const { element, rows, cols } = props;
  const paymentSelectorRef = useRef(null);

  useEffect(() => {
    
    if (paymentSelectorRef.current && element) {
      paymentSelectorRef.current.e = element;
      paymentSelectorRef.current.rows = rows;
      paymentSelectorRef.current.cols = cols;

    }
  }, [element, rows,cols]);

  return (
    <div>
     
      {element ? (
        <payment-selector id="payment-selector" ref={paymentSelectorRef}></payment-selector>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(paymentSelectorWrapper);
