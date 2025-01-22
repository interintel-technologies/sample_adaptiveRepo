import React, { useEffect, useRef } from 'react';
import './calendar-element';

const CalendarELementWrapper = ({ element }) => {
  const calenderElementRef = useRef(null);

  useEffect(() => {
    if (calenderElementRef.current && element) {
      calenderElementRef.current.e = element;

    }
  }, [element]);

  return (
    <>
      {element  ? (
        <calendar-element id="calendar-element" ref={calenderElementRef}></calendar-element>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default CalendarELementWrapper;
