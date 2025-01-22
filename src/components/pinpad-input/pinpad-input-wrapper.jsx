import React, { useEffect, useRef } from 'react';
import './pinpad-input';


const PinPadInputWrapper = (props) => {
  const { element } = props;
  
  console.log("element pin pad ",element);
  
  
  const pinPadRef = useRef(null);

  useEffect(() => {
    
    if (pinPadRef.current && element) {
      pinPadRef.current.e = element;

    }
  }, [element]);

  return (
    <div>
     
      {element ? (
        <pinpad-input id="pinpad-input" ref={pinPadRef}></pinpad-input>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default PinPadInputWrapper;