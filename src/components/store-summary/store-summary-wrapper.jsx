import React, { useEffect, useRef } from 'react';
import './store-summary';
import withDataSource from '../../core/mixins/datasource-mixin';


const StoreSummaryWrapper = ({ element, data, rows,cols }) => {
  const summaryReturnsRef = useRef(null);
 
  useEffect(() => {
    if (summaryReturnsRef.current && element) {
      summaryReturnsRef.current.e = element;
      summaryReturnsRef.current.data = data;
      summaryReturnsRef.current.rows = rows;
      summaryReturnsRef.current.cols = cols;

    }
  }, [element, data, rows,cols]);

  return (
    <div>
      {element && data && rows ? <store-summary id="store-summary" ref={summaryReturnsRef}></store-summary> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(StoreSummaryWrapper);
