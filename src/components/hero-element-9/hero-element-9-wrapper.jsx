import React, {  useEffect, useRef } from 'react';
import './hero-element-9';

const HeroElement9Wrapper = ({element}) => {
  
  const heroElement9Ref = useRef(null);

  useEffect(() => {
    if (heroElement9Ref.current && element) {
      heroElement9Ref.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <hero-element-9 id="hero-element-9" ref={heroElement9Ref}></hero-element-9> : <p>Loading data...</p>}

    </div>
  );
};

export default HeroElement9Wrapper;
