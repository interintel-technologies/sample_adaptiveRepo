import React, { useEffect, useRef } from 'react';
import './date';

const DateInputWrapper = ({element}) => {
  const dateInputRef = useRef(null);

  useEffect(() => {
    if (dateInputRef.current && element) {
      const numberInputElement = dateInputRef.current;

      numberInputElement.e = element;
      
    }

  }, [element]);


  return (
    <div>
      <date-input id="date-input" ref={dateInputRef}></date-input>
    </div>
  );
};

export default DateInputWrapper;
