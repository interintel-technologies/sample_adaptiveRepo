import React, { useEffect, useRef, useState } from 'react';
import './handcrafts-hero';
import withDataSource from '../../core/mixins/datasource-mixin';

const HandsCraftsHero = ({ element, rows,cols }) => {
  const inforCTARef = useRef(null);

  useEffect(() => {

      if (inforCTARef.current) {
        inforCTARef.current.e = element;
        inforCTARef.current.rows = rows;
        inforCTARef.current.cols = cols;

      }
    
  }, [cols, rows]); // Dependencies ensure the effect runs when element or rows change

  return (
    <div>
     
        <handcrafts-hero id="handcrafts-hero" ref={inforCTARef}></handcrafts-hero>
      
    </div>
  );
};

const HandsCraftsHeroWrapper = withDataSource(HandsCraftsHero);
export default HandsCraftsHeroWrapper