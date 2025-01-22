import React, { useEffect, useRef } from 'react';
import './time-element';

const TimeELementWrapper = ({ element }) => {
  
  const timeELementRef = useRef(null);

  useEffect(() => {
    if (timeELementRef.current && element) {

      if (timeELementRef.current.e !== element) {
        timeELementRef.current.e = element;
      }

    }
  }, [element]);

  return (
    <>
      {element && <time-element id="time-element" ref={timeELementRef}></time-element>}
    </>
  );
};

export default TimeELementWrapper;
