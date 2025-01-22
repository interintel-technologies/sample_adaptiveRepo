import React, { useEffect, useRef } from 'react';
import './number-input';

const NumberInputWrapper = ({element,submitForm}) => {
  
  const numberInputRef = useRef(null);

  useEffect(() => {
    if (numberInputRef.current && element) {
      const numberInputElement = numberInputRef.current;
      numberInputElement.e = element;
      numberInputElement.submitForm = submitForm;
    }

  }, [element]);

  return (
  <>
    {element &&  <number-input id="number-input" ref={numberInputRef}></number-input> }
    </>
  );
};

export default NumberInputWrapper;
