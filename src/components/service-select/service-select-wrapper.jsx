import React, { useEffect, useRef } from 'react';
import './service-select';
import withDataSource from '../../core/mixins/datasource-mixin';


const serviceSelectWrapper = (props) => {
  const { element, rows,cols, paramsCallback } = props;
  const serviceSelectRef = useRef(null);

  useEffect(() => {
    
    if (serviceSelectRef.current && element) {
      serviceSelectRef.current.e = element;
      serviceSelectRef.current.rows = rows;
      serviceSelectRef.current.cols = cols;

    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <service-select id="service-select" ref={serviceSelectRef}></service-select>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(serviceSelectWrapper);
