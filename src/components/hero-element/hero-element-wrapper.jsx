import React, { useState, useEffect, useRef } from 'react';
import './hero-element';
import withDataSource from '../../core/mixins/datasource-mixin';

const HeroElementWrapper = ({element}) => {  
  const heroElementRef = useRef(null);

  useEffect(() => {
    if (heroElementRef.current && element) {
      heroElementRef.current.e = element
    }

  }, [element]);

  return (
    <div>
      
       <hero-element id="hero-element" ref={heroElementRef}></hero-element>

    </div>
  );
};

export default withDataSource(HeroElementWrapper);
