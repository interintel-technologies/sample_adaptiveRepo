import React, { useEffect, useRef } from 'react';
import './password-input';


const passwordInputWrapper = ({ element,submitForm }) => {
  console.log("password input element is ",element);
  
  const textInputRef = useRef(null);

  useEffect(() => {
    if (textInputRef.current && element) {
      textInputRef.current.e = element;
      textInputRef.current.submitForm = submitForm;
    }
  }, [element]);

  return (
    <>
      {element && <password-input id="password-input" ref={textInputRef}></password-input>}
    </>
  );
};

export default passwordInputWrapper;
