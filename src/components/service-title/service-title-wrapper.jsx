import React, { useState, useEffect, useRef } from 'react';
import './service-title';
import withDataSource from '../../core/mixins/datasource-mixin';

const ServiceTitleWrapper = ({ element }) => {

  const ServiceTitleRef = useRef(null);

  useEffect(() => {
    const ServiceTitle = ServiceTitleRef.current;

    if (ServiceTitle && element) {
      ServiceTitle.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <service-title id="service-title" ref={ServiceTitleRef}></service-title>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(ServiceTitleWrapper);
