import React, { useEffect, useRef } from 'react';
import './summary-tab';


const SummaryTabWrapper = ({ element, data, rows,cols }) => {
  const summaryTabsRef = useRef(null);
 
  useEffect(() => {
    if (summaryTabsRef.current && element) {
      summaryTabsRef.current.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? <summary-tab id="summary-tab" ref={summaryTabsRef}></summary-tab> : <p>Loading data...</p>}
    </div>
  );
};

export default SummaryTabWrapper;
