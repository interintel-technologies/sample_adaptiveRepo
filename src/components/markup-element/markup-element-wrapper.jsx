import React, { useEffect, useRef } from 'react';
import './markup-element';

const MarkupElementWrapper = ({ element }) => {

  
  const markupElementRef = useRef(null);

  useEffect(() => {
    if (markupElementRef.current && element) {
      markupElementRef.current.e = element;
    }
  }, [element]);

  return (
    <>
      {element ? (
        <markup-element id="markup-element" ref={markupElementRef}></markup-element>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default MarkupElementWrapper;
