import React, { useEffect, useRef } from 'react';
import './split-button';


const SplitButton = ({ element }) => {
  const splitButtonRef = useRef(null);
 
  useEffect(() => {
    if (splitButtonRef.current && element) {
      splitButtonRef.current.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? <split-button id="split-button" ref={splitButtonRef}></split-button> : <p>Loading data...</p>}
    </div>
  );
};

export default SplitButton;
