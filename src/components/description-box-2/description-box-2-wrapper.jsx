import React, { useEffect, useRef } from 'react';
import './description-box';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const DescriptionBox2 = (props) => {
  const { element, rows, paramsCallback } = props;
  const descriptionBoxRef = useRef(null);

  useEffect(() => {
    
    if (descriptionBoxRef.current && element) {
      descriptionBoxRef.current.e = element;
      descriptionBoxRef.current.rows = rows;
    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <description-box id="description-box" ref={descriptionBoxRef}></description-box>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

const DescriptionBoxWrapper2 = withDataSource(DescriptionBox2);
export default DescriptionBoxWrapper2