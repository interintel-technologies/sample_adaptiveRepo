import React, { useEffect, useRef } from 'react';
import './email-input';

const EmailInputWrapper = ({ element }) => {
  const emailRef = useRef(null);

  useEffect(() => {
    if (emailRef.current && element) {
      emailRef.current.e = element;
     
    }
  }, [element]);

  return (
    <>
      {element ? (
        <email-input ref={emailRef}></email-input>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default EmailInputWrapper;
