import React, { useEffect, useRef } from 'react';
import './steps-progress';


const StepsProgressWrapper = ({ element}) => {
  const stepsProgressRRef = useRef(null);
   
  useEffect(() => {
    if (stepsProgressRRef.current && element) {
      stepsProgressRRef.current.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? <steps-progress id="steps-progress" ref={stepsProgressRRef}></steps-progress> : <p>Loading data...</p>}
    </div>
  );
};

export default StepsProgressWrapper;
