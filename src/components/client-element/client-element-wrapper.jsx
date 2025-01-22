import React, { useEffect, useRef } from 'react';
import './client-element';
import withDataSource from '../../core/mixins/datasource-mixin';

const ClientElementWrapper = ({ element, rows, cols }) => {
  const clientCounterRef = useRef(null);

  useEffect(() => {
    if (clientCounterRef.current && element) {
      clientCounterRef.current.e = element;
      clientCounterRef.current.rows = rows;
      clientCounterRef.current.cols = cols;
    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <client-element id="client-element" ref={clientCounterRef}></client-element>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(ClientElementWrapper);
