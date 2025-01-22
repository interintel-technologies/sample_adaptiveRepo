import React, { useEffect, useRef } from 'react';
import './quick-overview';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const quickOverviewWrapper = (props) => {
  const { element, rows, paramsCallback } = props;
  const quickOverviewRef = useRef(null);

  useEffect(() => {
    
    if (quickOverviewRef.current && element) {
      quickOverviewRef.current.e = element;
      quickOverviewRef.current.rows = rows;
    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <quick-overview id="quick-overview" ref={quickOverviewRef}></quick-overview>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(quickOverviewWrapper);
