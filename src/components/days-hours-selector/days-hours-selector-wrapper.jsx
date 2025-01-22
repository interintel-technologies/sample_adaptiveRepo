import React, { useEffect, useRef } from 'react';
import './days-hours-selector';

const DaysHoursSelectorWrapper = ({element}) => {

  const dayHoursSelectorRef = useRef(null);

  useEffect(() => {
    if (dayHoursSelectorRef.current && element) {
      const daysHoursElement = dayHoursSelectorRef.current;

      daysHoursElement.e = element;

    }

  }, [element]);
  return (
    <>
       {element && <days-hours-selector id="days-hours-selector" ref={dayHoursSelectorRef}></days-hours-selector> }
    </>
  );
};

export default DaysHoursSelectorWrapper;
