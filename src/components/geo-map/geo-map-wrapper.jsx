import React, { useEffect, useRef } from 'react';
import './geo-map';

const GeoMapElementWrapper = ({ element }) => {

  
  const geoMapElementRef = useRef(null);

  useEffect(() => {
    if (geoMapElementRef.current && element) {
      geoMapElementRef.current.e = element;

      console.log('Element set in useEffect:', element);

    }
  }, [element]);

  return (
    <>
      {element ? (
        <geo-map id="geo-map" ref={geoMapElementRef}></geo-map>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default GeoMapElementWrapper;
