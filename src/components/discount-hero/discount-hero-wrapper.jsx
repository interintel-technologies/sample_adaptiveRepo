import React, { useEffect, useRef } from 'react';
import './discount-hero';
import withDataSource from '../../core/mixins/datasource-mixin';

const DiscountHero = ({ element, rows, cols }) => {
  const disocuntHerrorRef = useRef(null);

  useEffect(() => {
    if (disocuntHerrorRef.current && element) {
      disocuntHerrorRef.current.e = element;
      disocuntHerrorRef.current.rows = rows;
      disocuntHerrorRef.current.cols = cols;
    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <discount-hero id="discount-hero" ref={disocuntHerrorRef}></discount-hero>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(DiscountHero);
