import React, { useEffect, useRef } from "react";
import './toggle-input';

const ToggleInputWrapper = ({ element }) => {

    const toggleInputRef = useRef();

    useEffect(() => {
      if (toggleInputRef.current) {
          toggleInputRef.current.e = element;
      } else {
          console.log("toggleInputRef.current is not set");
      }
  }, [element]);
  
  

    return (
      <>
          {element ? <toggle-input ref={toggleInputRef}></toggle-input> : <p>Loading data...</p>}
      </>
  );
  
};

export default ToggleInputWrapper;
