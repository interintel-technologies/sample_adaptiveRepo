import React, { useEffect, useRef } from 'react';
import './completed-orders-list';
import withDataSource from '../../core/mixins/datasource-mixin';

const CompletedOrdersListWrapper = ({ element, rows, cols }) => {
  const completedOrdersListRef = useRef(null);

  useEffect(() => {
    if (completedOrdersListRef.current && element) {
      completedOrdersListRef.current.e = element;
      completedOrdersListRef.current.rows = rows;
      completedOrdersListRef.current.cols = cols;
    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <completed-orders-list id="completed-orders-list" ref={completedOrdersListRef}></completed-orders-list>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(CompletedOrdersListWrapper);
