import React, { useEffect, useRef } from 'react';
import './service-attendant-selector';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const serviceAttendantSelectorWrapper = (props) => {
  const { element, rows, paramsCallback } = props;
  const serviceAttendantSelectorRef = useRef(null);

  useEffect(() => {
    
    if (serviceAttendantSelectorRef.current && element) {
      serviceAttendantSelectorRef.current.e = element;
      serviceAttendantSelectorRef.current.rows = rows;
    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <service-attendant-selector id="service-attendant-selector" ref={serviceAttendantSelectorRef}></service-attendant-selector>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(serviceAttendantSelectorWrapper);
