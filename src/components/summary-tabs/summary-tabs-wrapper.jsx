import React, { useEffect, useRef } from 'react';
import './summary-tabs';
import withDataSource from '../../core/mixins/datasource-mixin';


const SummaryTabsWrapper = ({ element, data, rows,cols }) => {
  const summaryTabsRef = useRef(null);
 
  useEffect(() => {
    if (summaryTabsRef.current && element) {
      summaryTabsRef.current.e = element;
      summaryTabsRef.current.data = data;
      summaryTabsRef.current.rows = rows;
      summaryTabsRef.current.cols = cols;

    }
  }, [element, data, rows,cols]);

  return (
    <div>
      {element && data && rows ? <summary-tabs id="summary-tabs" ref={summaryTabsRef}></summary-tabs> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(SummaryTabsWrapper);
