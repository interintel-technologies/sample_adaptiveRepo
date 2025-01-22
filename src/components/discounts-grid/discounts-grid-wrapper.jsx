import React, { useEffect, useRef } from 'react';
import './discounts-grid';
import withDataSource from '../../core/mixins/datasource-mixin';

const DiscountsGridWapper = ({ element, rows, cols }) => {
  const discountGridRef = useRef(null);

  useEffect(() => {
    if (discountGridRef.current && element) {
      discountGridRef.current.e = element;
      discountGridRef.current.rows = rows;
      discountGridRef.current.cols = cols;
    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <discounts-grid id="discounts-grid" ref={discountGridRef}></discounts-grid>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(DiscountsGridWapper);
