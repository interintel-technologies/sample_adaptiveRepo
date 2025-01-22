import React, {  useEffect, useRef } from 'react';
import './hero-element-10';

const HeroElement10Wrapper = ({element}) => {
  
  const heroElement10Ref = useRef(null);

  useEffect(() => {
    if (heroElement10Ref.current && element) {
      heroElement10Ref.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <hero-element-10 id="hero-element-10" ref={heroElement10Ref}></hero-element-10> : <p>Loading data...</p>}

    </div>
  );
};

export default HeroElement10Wrapper;
