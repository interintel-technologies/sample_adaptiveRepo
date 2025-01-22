import React, { useEffect, useRef } from 'react';
import './price-select';
import withDataSource from '../../core/mixins/datasource-mixin';


const priceSelectWrapper = (props) => {
  const { element, rows,cols } = props;
  const priceSelectRef = useRef(null);

  useEffect(() => {
    
    if (priceSelectRef.current && element) {
      priceSelectRef.current.e = element;
      priceSelectRef.current.rows = rows;
      priceSelectRef.current.cols = cols;

    }
  }, [element, rows, cols]);

  return (
    <div>
     
      {element ? (
        <price-select id="price-select" ref={priceSelectRef}></price-select>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(priceSelectWrapper);
