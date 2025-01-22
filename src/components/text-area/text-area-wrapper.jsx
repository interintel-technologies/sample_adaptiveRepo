import React, { useEffect, useRef } from 'react';
import './text-area';

const TextAreaWrapper = ({ element }) => {
  
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
      {element && <text-area id="text-area" ref={textInputRef}></text-area>}
    </>
  );
};

export default TextAreaWrapper;
