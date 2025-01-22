import React, { useEffect, useRef } from 'react';
import './ads-element';
import withDataSource from '../../core/mixins/datasource-mixin';

const AdsElement = ({ element, rows, cols }) => {
  const adsElementRef = useRef(null);

  useEffect(() => {
    if (adsElementRef.current && element) {
      adsElementRef.current.e = element;
      adsElementRef.current.rows = rows;
      adsElementRef.current.cols = cols;
    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <ads-element id="ads-element" ref={adsElementRef}></ads-element>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

const AdsElementWrapper = withDataSource(AdsElement);

export default AdsElementWrapper; // Fixed the export keyword
