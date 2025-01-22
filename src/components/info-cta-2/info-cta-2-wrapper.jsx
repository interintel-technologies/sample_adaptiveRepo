import React, { useState, useEffect, useRef } from 'react';
import './info-cta-2';

const InfoCTA2Wrapper = ({element}) => {
  
  const inforCTARef = useRef(null);

  useEffect(() => {
    if (inforCTARef.current && element) {
      inforCTARef.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <info-cta-2 id="info-cta-2" ref={inforCTARef}></info-cta-2> : <p>Loading data...</p>}

    </div>
  );
};

export default InfoCTA2Wrapper;
