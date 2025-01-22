import React, { useEffect, useRef } from 'react';
import './checkbox-check';

const CheckboxCheckWrapper = ({ element}) => {
  const checkBoxElementRef = useRef(null);

  useEffect(() => {
    if (checkBoxElementRef.current && element) {
      checkBoxElementRef.current.e = element;

    }
  }, [element]);

  return (
    <>
      {element ? (
        <checkbox-check id="checkbox-check" ref={checkBoxElementRef}></checkbox-check>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default CheckboxCheckWrapper;
