import React, { useEffect, useRef } from 'react';
import './discount-hero-2';
import withDataSource from '../../core/mixins/datasource-mixin';

const DiscountHero2 = ({ element, rows, cols }) => {
  const discountHero2Ref = useRef(null);

  useEffect(() => {
    if (discountHero2Ref.current && element) {
      discountHero2Ref.current.e = element;
      discountHero2Ref.current.rows = rows;
      discountHero2Ref.current.cols = cols;

    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <discount-hero-2 id="discount-hero-2" ref={discountHero2Ref}></discount-hero-2>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(DiscountHero2);
