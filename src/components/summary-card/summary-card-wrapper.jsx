import React, { useEffect, useRef } from 'react';
import './summary-card';
import withDataSource from '../../core/mixins/datasource-mixin';


const SummaryCardWrapper = ({ element, data, rows,cols }) => {
  const SummaryCardRef = useRef(null);
 
  useEffect(() => {
    if (SummaryCardRef.current && element) {
      SummaryCardRef.current.e = element;
      SummaryCardRef.current.data = data;
      SummaryCardRef.current.rows = rows;
      SummaryCardRef.current.cols = cols;

    }
  }, [element, data, rows,cols]);

  return (
    <div>
      {element && data && rows ? <summary-card id="summary-card" ref={SummaryCardRef}></summary-card> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(SummaryCardWrapper);
