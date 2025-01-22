import React, {  useEffect, useRef } from 'react';
import './hero-element-8';

const HeroElement8Wrapper = ({element}) => {
  
  const heroElement8Ref = useRef(null);

  useEffect(() => {
    if (heroElement8Ref.current && element) {
      heroElement8Ref.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <hero-element-8 id="hero-element-8" ref={heroElement8Ref}></hero-element-8> : <p>Loading data...</p>}

    </div>
  );
};

export default HeroElement8Wrapper;
