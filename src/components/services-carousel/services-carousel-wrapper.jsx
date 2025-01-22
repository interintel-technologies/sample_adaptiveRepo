import React, { useEffect, useRef } from 'react';
import './services-carousel';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const servicesCarouselWrapper = (props) => {
  const { element, rows, paramsCallback } = props;
  const servicesCarouselRef = useRef(null);

  useEffect(() => {
    
    if (servicesCarouselRef.current && element) {
      servicesCarouselRef.current.e = element;
      servicesCarouselRef.current.rows = rows;
    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <services-carousel id="services-carousel" ref={servicesCarouselRef}></services-carousel>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(servicesCarouselWrapper);
