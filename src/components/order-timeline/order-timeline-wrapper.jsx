import React, { useEffect, useRef } from 'react';
import './order-timeline';
import withDataSource from '../../core/mixins/datasource-mixin';


const OrderTimelineWrapper = ({ element, data, rows,cols }) => {
  const orderTimelineRef = useRef(null);
 
  useEffect(() => {
    if (orderTimelineRef.current && element) {
      orderTimelineRef.current.e = element;
      orderTimelineRef.current.data = data;
      orderTimelineRef.current.rows = rows;
      orderTimelineRef.current.cols = cols;

    }
  }, [element, data, rows,cols]);

  return (
    <div>
      {element && data && rows ? <order-timeline id="order-timeline" ref={orderTimelineRef}></order-timeline> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(OrderTimelineWrapper);
