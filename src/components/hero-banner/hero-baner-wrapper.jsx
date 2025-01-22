import React, { useState, useEffect, useRef } from 'react';
import './hero-banner';
import withDataSource from '../../core/mixins/datasource-mixin';

const HeroBanner = ({element}) => {

  
  const heroBannerRed = useRef(null);

  useEffect(() => {
    if (heroBannerRed.current && element) {
      heroBannerRed.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <hero-banner id="hero-banner" ref={heroBannerRed}></hero-banner> : <p>Loading data...</p>}

    </div>
  );
};


const HeroBannerWrapper = withDataSource(HeroBanner);
export default HeroBannerWrapper