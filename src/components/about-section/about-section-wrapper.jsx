import React, { useState, useEffect, useRef } from 'react';
import './about-section';

const AboutSectionWrapper = ({ element}) => {
  
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    if (aboutSectionRef.current && element) {      
        aboutSectionRef.current.e = element;
    }
  }, [element]);

  return (
    <>
     
      {element && (
        <about-section id="about-section" ref={aboutSectionRef}></about-section>
      )}
    </>
  );
};

export default AboutSectionWrapper;
