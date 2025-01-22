import React, { useState, useEffect, useRef } from 'react';
import './section-element';
import withDataSource from '../../core/mixins/datasource-mixin';

const SectionElementWrapper = ({ element }) => {

  const SectionElementRef = useRef(null);

  useEffect(() => {
    const SectionElement = SectionElementRef.current;

    if (SectionElement && element) {
      SectionElement.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <section-element id="section-element" ref={SectionElementRef}></section-element>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(SectionElementWrapper);
