import React, { useState, useEffect, useRef } from 'react';
import './section-front';
import withDataSource from '../../core/mixins/datasource-mixin';

const SectionFrontWrapper = ({ element }) => {

  const SectionFrontRef = useRef(null);

  useEffect(() => {
    const SectionFront = SectionFrontRef.current;

    if (SectionFront && element) {
      SectionFront.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <section-front id="section-front" ref={SectionFrontRef}></section-front>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(SectionFrontWrapper);
