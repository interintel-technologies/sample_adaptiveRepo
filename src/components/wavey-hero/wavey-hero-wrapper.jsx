import React, { useEffect, useRef } from 'react';
import './wavey-hero';



const WavyHeroElementWrapper = ({ element }) => {
  const wavyHeroELementRef = useRef(null);

  useEffect(() => {
    if (wavyHeroELementRef.current && element) {
      wavyHeroELementRef.current.e = element;
    }
  }, [element]);

  return (
    <div>
      {element ? <wavey-hero id="wavey-hero" ref={wavyHeroELementRef}></wavey-hero> : <p>Loading data...</p>}
    </div>
  );
};

export default WavyHeroElementWrapper;
