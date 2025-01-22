import React, { useEffect, useRef } from 'react';
import './summary-returns';
import withDataSource from '../../core/mixins/datasource-mixin';


const SummaryReturnsWrapper = ({ element, data, rows,cols }) => {
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
      {element && data && rows ? <summary-returns id="summary-returns" ref={summaryReturnsRef}></summary-returns> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(SummaryReturnsWrapper);
