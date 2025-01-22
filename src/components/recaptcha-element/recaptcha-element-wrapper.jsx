import React, { useEffect, useRef } from 'react';
import './recaptcha-element'; // Assuming this path correctly imports the custom element

const RecaptchaElementWrapper = ({ element }) => {
  const pinInputRef = useRef(null);

  useEffect(() => {
    if (pinInputRef.current && element) {
      pinInputRef.current.e = element;
    }
  }, [element]);

  return (
    <>
      {element && <recaptcha-element id="recaptcha-element" ref={pinInputRef}></recaptcha-element>}
    </>
  );
};

export default RecaptchaElementWrapper;
