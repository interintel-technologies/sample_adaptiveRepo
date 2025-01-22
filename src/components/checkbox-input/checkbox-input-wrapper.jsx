import React, { useEffect, useRef } from 'react';
import './checkbox-input';

const CheckboxInputWrapper = ({ element}) => {
  const heroElementRef = useRef(null);

  useEffect(() => {
    if (heroElementRef.current && element) {
      heroElementRef.current.e = element;

    }
  }, [element]);

  return (
    <>
      {element ? (
        <checkbox-input id="checkbox-input" ref={heroElementRef}></checkbox-input>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default CheckboxInputWrapper;
