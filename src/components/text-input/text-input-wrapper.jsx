import React, { useEffect, useRef } from 'react';
import { Fade } from '@mui/material'; // Import Fade component from Material-UI
import './text-input';

const TextInputWrapper = ({ element, submitForm }) => {
  const textInputRef = useRef(null);

  useEffect(() => {
    if (textInputRef.current && element) {
      textInputRef.current.submitForm = submitForm;
      textInputRef.current.e = element;
    }
  }, [element, submitForm]); // Added submitForm to the dependency array

  // Determine if fade should be applied
  const fadeIn = Boolean(element); // Set fadeIn to true if element exists, false otherwise

  return (
    <>
      <Fade in={fadeIn} timeout={500}>
        <div>
          {element && <text-input id="text-input" ref={textInputRef}></text-input>}
        </div>
      </Fade>
    </>
  );
};

export default TextInputWrapper;
