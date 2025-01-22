import React, { useState, useEffect, useRef } from 'react';
import './info-cta';

const InfoCTAWrapper = ({element}) => {
  
  const inforCTARef = useRef(null);

  useEffect(() => {
    if (inforCTARef.current && element) {
      inforCTARef.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <info-cta id="info-cta" ref={inforCTARef}></info-cta> : <p>Loading data...</p>}

    </div>
  );
};

export default InfoCTAWrapper;
