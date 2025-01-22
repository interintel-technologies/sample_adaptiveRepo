import React, { useEffect, useRef } from 'react';
import './geo-search';

const GeoSearchWrapper = ({ element }) => {
  
  const heroElementRef = useRef(null);

  useEffect(() => {
    if (heroElementRef.current && element) {
      heroElementRef.current.e = element;

      console.log('Element set in useEffect:', element);

    }
  }, [element]);

  return (
    <>
      {element ? (
        <geo-search id="geo-search" ref={heroElementRef}></geo-search>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default GeoSearchWrapper;
