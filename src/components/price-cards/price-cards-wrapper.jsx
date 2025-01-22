import React, { useEffect, useRef } from 'react';
import './price-cards';
import withDataSource from '../../core/mixins/datasource-mixin';

const priceCardsWrapper = (props) => {
  const { element, rows,cols } = props;
  const priceCardsRef = useRef(null);

  useEffect(() => {
    
    if (priceCardsRef.current && element) {
      priceCardsRef.current.e = element;
      priceCardsRef.current.rows = rows;
      priceCardsRef.current.cols = cols;

    }
  }, [element, rows, cols]);

  return (
    <div>
     
      {element ? (
        <price-cards id="price-cards" ref={priceCardsRef}></price-cards>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(priceCardsWrapper);
