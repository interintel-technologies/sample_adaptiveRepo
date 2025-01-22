import React, { useState, useEffect, useRef } from 'react';
import './login-google';

const loginGoogleWrapper = ({ element}) => {
  
  const loginGoogleRef = useRef(null);

  useEffect(() => {
    if (loginGoogleRef.current && element) {
      if (loginGoogleRef.current.e !== element) {
        loginGoogleRef.current.e = element;
      }

    
    }
  }, [element]);

  return (
    <>
     
      {element ? (
        <login-google id="login-google" ref={loginGoogleRef}></login-google>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default loginGoogleWrapper;
