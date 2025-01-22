import React, { useEffect, useRef } from 'react';
import './payment-options';
import withDataSource from '../../core/mixins/datasource-mixin';


const paymentOptionsWrapper = (props) => {
  const { element, rows, cols } = props;
  const paymentOptionsRef = useRef(null);

  useEffect(() => {
    
    if (paymentOptionsRef.current && element) {
      paymentOptionsRef.current.e = element;
      paymentOptionsRef.current.rows = rows;
      paymentOptionsRef.current.cols = cols;

    }
  }, [element, rows, props, cols]);

  return (
    <div>
     
      {element ? (
        <payment-options id="payment-options" ref={paymentOptionsRef}></payment-options>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(paymentOptionsWrapper);
