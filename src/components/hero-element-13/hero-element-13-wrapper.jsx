import React, {  useEffect, useRef } from 'react';
import './hero-element-13';

const HeroElement13Wrapper = ({element}) => {
  
  const heroElement11Ref = useRef(null);

  useEffect(() => {
    if (heroElement11Ref.current && element) {
      heroElement11Ref.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <hero-element-13 id="hero-element-13" ref={heroElement11Ref}></hero-element-13> : <p>Loading data...</p>}

    </div>
  );
};

export default HeroElement13Wrapper;
