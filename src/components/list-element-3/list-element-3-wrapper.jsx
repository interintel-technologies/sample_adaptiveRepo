import React, { useEffect, useRef } from 'react';
import './list-element-3';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const listElement3Wrapper = (props) => {
  const { element, rows, paramsCallback } = props;
  const listElement3Ref = useRef(null);

  useEffect(() => {
    
    if (listElement3Ref.current && element) {
      listElement3Ref.current.e = element;
      listElement3Ref.current.rows = rows;
    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <list-element-3 id="list-element-3" ref={listElement3Ref}></list-element-3>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(listElement3Wrapper);
