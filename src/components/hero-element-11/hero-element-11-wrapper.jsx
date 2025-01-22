import React, {  useEffect, useRef } from 'react';
import './hero-element-11';
import withDataSource from '../../core/mixins/datasource-mixin';

const HeroElement11Wrapper = ({element,rows,cols}) => {
  
  const heroElement11Ref = useRef(null);

  useEffect(() => {
    if (heroElement11Ref.current && element) {
      heroElement11Ref.current.e = element
      heroElement11Ref.current.rows = rows
      heroElement11Ref.current.cols = cols

    }

  }, [element]);

  return (
    <div>
      
      {element ? <hero-element-11 id="hero-element-11" ref={heroElement11Ref}></hero-element-11> : <p>Loading data...</p>}

    </div>
  );
};

export default withDataSource(HeroElement11Wrapper);
