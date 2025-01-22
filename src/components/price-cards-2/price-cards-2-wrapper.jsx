import React, { useEffect, useRef } from 'react';
import './price-cards-2';
import withDataSource from '../../core/mixins/datasource-mixin';


const priceCards2Wrapper = (props) => {
  const { element, rows,cols } = props;
  const priceCards2Ref = useRef(null);

  useEffect(() => {
    
    if (priceCards2Ref.current && element) {
      priceCards2Ref.current.e = element;
      priceCards2Ref.current.rows = rows;
      priceCards2Ref.current.cols = cols;

    }
  }, [element, rows, cols]);

  return (
    <div>
     
      {element ? (
        <price-cards-2 id="price-cards-2" ref={priceCards2Ref}></price-cards-2>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(priceCards2Wrapper);
