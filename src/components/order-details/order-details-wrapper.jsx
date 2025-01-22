import React, { useEffect, useRef } from 'react';
import './order-details';
import withDataSource from '../../core/mixins/datasource-mixin';

const orderDetailsWrapper = (props) => {
  const { element, cols, rows } = props;
  const orderDetailsRef = useRef(null);

  useEffect(() => {
    
    if (orderDetailsRef.current && element) {
      orderDetailsRef.current.e = element;
      orderDetailsRef.current.rows = rows;
      orderDetailsRef.current.cols = cols;

    }
  }, [element, rows,cols]);

  return (
    <div>
     
      {element ? (
        <order-details id="order-details" ref={orderDetailsRef}></order-details>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(orderDetailsWrapper);
