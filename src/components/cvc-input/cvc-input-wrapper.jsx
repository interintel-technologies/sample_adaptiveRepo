import React, { useEffect, useRef } from 'react';
import './cvc-input';

const CVCInputWrapper = ({element}) => {
  
  const numberInputRef = useRef(null);

  useEffect(() => {
    if (numberInputRef.current && element) {
      const numberInputElement = numberInputRef.current;

      numberInputElement.e = element;
      numberInputElement.name = element[0];
      numberInputElement.submit_name = element[4];


      numberInputElement.max = element[3];
      numberInputElement.min = element[2];
      numberInputElement.required = element[9]

    }

  }, [element]);

  return (
  <>
    {element &&  <number-input id="number-input" ref={numberInputRef}></number-input> }
    </>
  );
};

export default CVCInputWrapper;
