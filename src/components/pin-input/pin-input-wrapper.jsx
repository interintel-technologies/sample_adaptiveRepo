import React, { useEffect, useRef } from 'react';
import './pin-input';

const PinInputWrapper = ({element}) => {
  
  const pinInputRef = useRef(null);

  useEffect(() => {
    if (pinInputRef.current && element) {
      const pinInputElement = pinInputRef.current;

      pinInputElement.e = element;

    }

  }, [element]);

  return (
  <>
    {element &&  <pin-input id="pin-input" ref={pinInputRef}></pin-input> }
    </>
  );
};

export default PinInputWrapper;
