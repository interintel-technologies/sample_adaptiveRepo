import React, { useState, useEffect, useRef } from 'react';
import './login-facebook';

const loginFacebookWrapper = ({_dialog, element}) => {
  
  const loginGoogleRef = useRef(null);

  useEffect(() => {
    if (loginGoogleRef.current && element) {
      if (loginGoogleRef.current.e !== element) {
        loginGoogleRef.current.e = element;
        loginGoogleRef.current._dialog = _dialog
      }

    
    }
  }, [element]);

  return (
    <>
     
      {element ? (
        <login-facebook id="login-facebook" ref={loginGoogleRef}></login-facebook>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default loginFacebookWrapper;
