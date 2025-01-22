import React, { useEffect, useRef } from 'react';
import './payment-method-summary';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const paymentMethodSummaryWrapper = (props) => {
  const { element, rows, cols } = props;
  const paymentMethodSummaryRef = useRef(null);

  useEffect(() => {
    
    if (paymentMethodSummaryRef.current && element) {
      paymentMethodSummaryRef.current.e = element;
      paymentMethodSummaryRef.current.rows = rows;
      paymentMethodSummaryRef.current.cols = cols;

    }
  }, [element, rows, props, cols]);

  return (
    <div>
     
      {element ? (
        <payment-method-summary id="payment-method-summary" ref={paymentMethodSummaryRef}></payment-method-summary>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(paymentMethodSummaryWrapper);
