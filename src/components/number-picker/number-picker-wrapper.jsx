import React, { useEffect, useRef } from 'react';
import './number-picker';

const NumberPickerWrapper = ({ element }) => {  
  const textInputRef = useRef(null);

  useEffect(() => {
    if (textInputRef.current && element) {

      if (textInputRef.current.e !== element) {
        textInputRef.current.e = element;
      }

    }
  }, [element]);

  return (
    <>
      {element && <number-picker id="number-picker" ref={textInputRef}></number-picker>}
    </>
  );
};

export default NumberPickerWrapper;
