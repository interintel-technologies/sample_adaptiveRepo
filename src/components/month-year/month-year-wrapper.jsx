import React, { useEffect, useRef } from 'react';
import './month-year';


const monthYearMipayWrapper = (props) => {
  const { element } = props;
  
  const monthYearRef = useRef(null);

  useEffect(() => {
    
    if (monthYearRef.current && element) {
      monthYearRef.current.e = element;
    }
  }, [element]);

  return (
    <div>
     
      {element ? (
        <month-year id="month-year" ref={monthYearRef}></month-year>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default monthYearMipayWrapper;

