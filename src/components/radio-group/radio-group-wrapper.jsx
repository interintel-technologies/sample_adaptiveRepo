import React, { useEffect, useRef } from 'react';
import './radio-group';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const radioGroupWrapper = (props) => {
  const { element, rows, paramsCallback } = props;
  const radioGroupRef = useRef(null);

  useEffect(() => {
    
    if (radioGroupRef.current && element) {
      radioGroupRef.current.e = element;
      radioGroupRef.current.rows = rows;
    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <radio-group id="radio-group" ref={radioGroupRef}></radio-group>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(radioGroupWrapper);
