import React, { useEffect, useRef } from 'react';
import './list-element';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const ListElementWrapper = (props) => {
  const { element, rows, paramsCallback } = props;
  const ListElementRef = useRef(null);

  useEffect(() => {
    
    if (ListElementRef.current && element) {
      ListElementRef.current.e = element;
      ListElementRef.current.rows = rows;
    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <list-element id="list-element" ref={ListElementRef}></list-element>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(ListElementWrapper);
