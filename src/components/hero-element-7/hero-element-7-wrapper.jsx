import React, {  useEffect, useRef } from 'react';
import './hero-element-7';

const HeroElement7Wrapper = ({element}) => {
  
  const heroElement7Ref = useRef(null);

  useEffect(() => {
    if (heroElement7Ref.current && element) {
      heroElement7Ref.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <hero-element-7 id="hero-element-7" ref={heroElement7Ref}></hero-element-7> : <p>Loading data...</p>}

    </div>
  );
};

export default HeroElement7Wrapper;
