import React, { useState, useEffect, useRef } from 'react';
import './hidden-element';

const HiddenElementWrapper = ({element}) => {
  const heroElementRef = useRef(null);

  useEffect(() => {
    if (heroElementRef.current && element) {
      heroElementRef.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <hidden-element id="hidden-element" ref={heroElementRef}></hidden-element> : <p>Loading data...</p>}

    </div>
  );
};

export default HiddenElementWrapper;
