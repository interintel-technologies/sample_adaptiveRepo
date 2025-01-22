import React, { useEffect, useRef } from 'react';
import './price-table';
import withDataSource from '../../core/mixins/datasource-mixin';


const priceTableWrapper = (props) => {
  const { element, rows, paramsCallback } = props;
  const priceTableRef = useRef(null);

  useEffect(() => {
    
    if (priceTableRef.current && element) {
      priceTableRef.current.e = element;
      priceTableRef.current.rows = rows;
    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <price-table id="price-table" ref={priceTableRef}></price-table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(priceTableWrapper);
