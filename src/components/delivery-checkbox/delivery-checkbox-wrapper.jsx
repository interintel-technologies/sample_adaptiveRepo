import React, { useEffect, useRef } from 'react';
import './delivery-checkbox';
import withDataSource from '../../core/mixins/datasource-mixin';

const DeliveryCheckboxWrapper = ({ element, rows, cols }) => {
  const deliveryCheckboxRef = useRef(null);

  useEffect(() => {
    if (deliveryCheckboxRef.current && element) {
      deliveryCheckboxRef.current.e = element;
      deliveryCheckboxRef.current.rows = rows;
      deliveryCheckboxRef.current.cols = cols;
    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <delivery-checkbox id="delivery-checkbox" ref={deliveryCheckboxRef}></delivery-checkbox>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(DeliveryCheckboxWrapper);
