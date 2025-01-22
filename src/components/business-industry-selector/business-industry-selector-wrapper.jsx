import React, { useEffect, useRef } from 'react';
import './business-industry-selector';
import withDataSource from '../../core/mixins/datasource-mixin';

const BusinessIndustrySelectorWrapper = ({ element, rows, cols }) => {
  const businessIndustrySelectorRef = useRef(null);

  useEffect(() => {
    if (businessIndustrySelectorRef.current && element) {
      businessIndustrySelectorRef.current.e = element;
      businessIndustrySelectorRef.current.rows = rows;
      businessIndustrySelectorRef.current.cols = cols;
    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <business-industry-selector id="business-industry-selector" ref={businessIndustrySelectorRef}></business-industry-selector>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(BusinessIndustrySelectorWrapper);
