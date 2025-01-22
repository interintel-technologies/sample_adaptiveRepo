import React, { useEffect, useRef } from 'react';
import './section-1';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const section1Wrapper = (props) => {
  const { element, rows, paramsCallback } = props;
  const section1Ref = useRef(null);

  useEffect(() => {
    
    if (section1Ref.current && element) {
      section1Ref.current.e = element;
      section1Ref.current.rows = rows;
    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <section-1 id="section-1" ref={section1Ref}></section-1>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(section1Wrapper);
