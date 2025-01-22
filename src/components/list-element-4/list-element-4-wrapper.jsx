import React, { useEffect, useRef } from 'react';
import './list-element-4';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const listElement4Wrapper = (props) => {
  const { element, rows,cols, paramsCallback } = props;
  const listElement4Ref = useRef(null);

  useEffect(() => {
    
    if (listElement4Ref.current && element) {
      listElement4Ref.current.e = element;
      listElement4Ref.current.rows = rows;
      listElement4Ref.current.cols = cols;

    }
  }, [element, rows, cols]);

  return (
    <div>
     
      {element ? (
        <list-element-4 id="list-element-4" ref={listElement4Ref}></list-element-4>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(listElement4Wrapper);

