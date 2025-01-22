import React, { useEffect, useRef } from 'react';
import './vertical-service-button';



const VerticalServiceButtonWrapper = ({_dialog, element }) => {
  const verticalServiceButtonRef = useRef(null);

  useEffect(() => {
    if (verticalServiceButtonRef.current && element) {
      verticalServiceButtonRef.current.e = element;
      verticalServiceButtonRef.current._dialog = _dialog;
      
    }
  }, [element]);

  return (
    <div>
      {element ? <vertical-service-button id="vertical-service-button" ref={verticalServiceButtonRef}></vertical-service-button> : <p>Loading data...</p>}
    </div>
  );
};

export default VerticalServiceButtonWrapper;
