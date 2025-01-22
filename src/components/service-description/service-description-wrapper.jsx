import React, { useState, useEffect, useRef } from 'react';
import './service-description';
import withDataSource from '../../core/mixins/datasource-mixin';

const ServiceDescriptionWrapper = ({ element }) => {

  const ServiceDescriptionRef = useRef(null);

  useEffect(() => {
    const ServiceDescription = ServiceDescriptionRef.current;

    if (ServiceDescription && element) {
      ServiceDescription.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <service-description id="service-description" ref={ServiceDescriptionRef}></service-description>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(ServiceDescriptionWrapper);
