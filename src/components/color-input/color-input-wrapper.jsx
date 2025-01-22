import React, { useEffect, useRef } from 'react';
import './color-input';

const ColorInputWrapper = ({ element }) => {
  const colorInputRef = useRef(null);

  useEffect(() => {
    if (colorInputRef.current && element) {
      colorInputRef.current.e = element;
    }
  }, [element]);

  return (
    <>
      {element ? (
        <color-input id="color-input" ref={colorInputRef}></color-input>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default ColorInputWrapper;
