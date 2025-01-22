import React, { useEffect, useRef } from 'react';
import './telephone-input';

const TelephoneInputWrapper = ({ element }) => {
  
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
      {element && <telephone-input id="telephone-input" ref={textInputRef}></telephone-input>}
    </>
  );
};

export default TelephoneInputWrapper;
