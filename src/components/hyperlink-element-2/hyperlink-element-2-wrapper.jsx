import React, { useState, useEffect, useRef } from 'react';
import './hyperlink-element-2';

const HyperLinkWrapper2 = ({ element, submitting, onAction }) => {


  const hyperlinkelement2Ref = useRef(null);

  useEffect(() => {
    const hyperLink2Element = hyperlinkelement2Ref.current;

    if (hyperLink2Element && element) {
      hyperLink2Element.e = element;
      
    }
  }, [element]);

  return (
    <div>
      {element ? (
        <hyperlink-element-2 id="hyperlink-element-2" ref={hyperlinkelement2Ref}></hyperlink-element-2>
      ) : (
        <p>Loading data...</p>
      )}

    
    </div>
  );
};

export default HyperLinkWrapper2;
