import React, {  useEffect, useRef } from 'react';
import './hero-element-12';

const HeroElement12Wrapper = ({element}) => {
  
  const heroElement12Ref = useRef(null);

  useEffect(() => {
    if (heroElement12Ref.current && element) {
      heroElement12Ref.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <hero-element-12 id="hero-element-12" ref={heroElement12Ref}></hero-element-12> : <p>Loading data...</p>}

    </div>
  );
};

export default HeroElement12Wrapper;
