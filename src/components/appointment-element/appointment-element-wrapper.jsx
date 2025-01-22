import React, { useEffect, useRef } from 'react';
import './appointment-element';

const AppointmentElementWrapper = ({ element }) => {
  const appointmentElementRef = useRef(null);

  useEffect(() => {
    if (appointmentElementRef.current && element) {
      appointmentElementRef.current.e = element;

    }
  }, [element]);

  return (
    <>
      {element ? (
        <appointment-element id="appointment-element" ref={appointmentElementRef}></appointment-element>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default AppointmentElementWrapper;
