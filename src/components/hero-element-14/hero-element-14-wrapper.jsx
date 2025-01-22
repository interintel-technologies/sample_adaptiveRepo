import React, {  useEffect, useRef } from 'react';
import './hero-element-14';

const HeroElement14Wrapper = ({element}) => {
  
  const heroElement14Ref = useRef(null);

  useEffect(() => {
    if (heroElement14Ref.current && element) {
      heroElement14Ref.current.e = element

    }

  }, [element]);

  return (
    <div>
      
      {element ? <hero-element-14 id="hero-element-14" ref={heroElement14Ref}></hero-element-14> : <p>Loading data...</p>}

    </div>
  );
};

export default HeroElement14Wrapper;
