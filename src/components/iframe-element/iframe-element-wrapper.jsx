import React, { useEffect, useRef } from 'react';
import './iframe-element';

const IFrameElement = ({ element,submitForm }) => {
  const heroElementRef = useRef(null);

  useEffect(() => {
    if (heroElementRef.current && element) {
      heroElementRef.current.e = element;
      heroElementRef.current.submitForm = submitForm
    
      console.log('Element set in useEffect:', element);
    }
  }, [element,submitForm]);

  return (
    <>
      {element ? (
        <iframe-element id="iframe-element" ref={heroElementRef}></iframe-element>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default IFrameElement;
