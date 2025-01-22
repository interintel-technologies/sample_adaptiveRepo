import React, {  useEffect, useRef } from 'react';
import './info-cta-3';

const InfoCTA3Wrapper = ({element}) => {
  
  const inforCTA3Ref = useRef(null);

  useEffect(() => {
    if (inforCTA3Ref.current && element) {
      inforCTA3Ref.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <info-cta-3 id="info-cta-3" ref={inforCTA3Ref}></info-cta-3> : <p>Loading data...</p>}

    </div>
  );
};

export default InfoCTA3Wrapper;
