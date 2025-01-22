import React, { useEffect, useRef, useState } from 'react';
import './submit-element';


const SubmitElementWrapper = ({submitForm, element,setPageSections }) => {

  const heroElementRef = useRef(null);
  
  useEffect(() => {
    const elementRef = heroElementRef.current;

    if (elementRef && element) {
      elementRef.e = element;
      elementRef.submitForm = submitForm
    }

  }, [element]);

  return (
    <div>

      
      {element ? (
  <submit-element
    id="submit-element"
    ref={heroElementRef}
  ></submit-element>
) : (
  <p>Loading data...</p>
)}

  
      
    </div>
  );
};

export default SubmitElementWrapper;
