import React, { useEffect, useRef } from 'react';
import './order-summary';
import withDataSource from '../../core/mixins/datasource-mixin';


const orderSummaryWrapper = (props) => {
  const { element, rows, cols } = props;
  const orderSummaryRef = useRef(null);

  useEffect(() => {
    
    if (orderSummaryRef.current && element) {
      orderSummaryRef.current.e = element;
      orderSummaryRef.current.rows = rows;
      orderSummaryRef.current.cols = cols;

    }
  }, [element, rows,cols]);

  return (
    <div>
     
      {element ? (
        <order-summary id="order-summary" ref={orderSummaryRef}></order-summary>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(orderSummaryWrapper);
