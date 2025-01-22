import React, { useState, useEffect, useRef } from 'react';
import './section-front-2';
import withDataSource from '../../core/mixins/datasource-mixin';

const sectionFront2Wrapper = ({ element }) => {

  const sectionFront2Ref = useRef(null);

  useEffect(() => {
    const sectionFront2 = sectionFront2Ref.current;

    if (sectionFront2 && element) {
      sectionFront2.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <section-front-2 id="section-front-2" ref={sectionFront2Ref}></section-front-2>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(sectionFront2Wrapper);
