import React, { useEffect, useRef } from 'react';
import './section-11';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const section11Wrapper = (props) => {
  const { element, rows, paramsCallback } = props;
  const section11Ref = useRef(null);

  useEffect(() => {
    
    if (section11Ref.current && element) {
      section11Ref.current.e = element;
      section11Ref.current.rows = rows;
    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <section-11 id="section-11" ref={section11Ref}></section-11>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(section11Wrapper);
