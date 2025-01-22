import React, { useEffect, useRef } from 'react';
import './time-element';

const TimeWrapper = ({ element, submitForm }) => {
  const textInputRef = useRef(null);
  

  useEffect(() => {
    if (textInputRef.current && element) {
      textInputRef.current.submitForm = submitForm;
      textInputRef.current.e = element;
    }
  }, [element, submitForm]); // Added submitForm to the dependency array

  // Determine if fade should be applied

  return (
    <>
      
        <div>
          {element && <time-element id="time-element" ref={textInputRef}></time-element>}
        </div>
    
    </>
  );
};

export default TimeWrapper;
