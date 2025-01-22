import React, { useEffect, useRef } from 'react';
import './upcoming-appointments';



const UpcomingAppointmentsWrapper = ({ element }) => {
  const upcomingAppointmentsRef = useRef(null);

  useEffect(() => {
    if (upcomingAppointmentsRef.current && element) {
      upcomingAppointmentsRef.current.e = element;
    }
  }, [element]);

  return (
    <div>
      {element ? <upcoming-appointments id="upcoming-appointments" ref={upcomingAppointmentsRef}></upcoming-appointments> : <p>Loading data...</p>}
    </div>
  );
};

export default UpcomingAppointmentsWrapper;
