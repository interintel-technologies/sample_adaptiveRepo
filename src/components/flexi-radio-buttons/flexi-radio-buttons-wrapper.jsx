import React, { useEffect, useRef } from 'react';
import './flexi-radio-buttons';

const FlexiRadioButton = ({ element }) => {

  const flexiRadioRef = useRef(null);

  useEffect(() => {
    if (flexiRadioRef.current && element) {
      flexiRadioRef.current.e = element;

    }
  }, [element]);

  return (
    <>
      {element ? (
        <flexi-radio-buttons id="flexi-radio-buttons" ref={flexiRadioRef}></flexi-radio-buttons>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default FlexiRadioButton;
