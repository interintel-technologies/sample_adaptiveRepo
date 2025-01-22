import React, { useEffect, useRef } from 'react';
import './faq-element';
import withDataSource from '../../core/mixins/datasource-mixin';

const FaqElementWrapper = ({ element, rows, cols }) => {
  const FaqElementRef = useRef(null);

  useEffect(() => {
    if (FaqElementRef.current && element) {
      FaqElementRef.current.e = element;
      FaqElementRef.current.rows = rows;
      FaqElementRef.current.cols = cols;
    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <faq-element id="faq-element" ref={FaqElementRef}></faq-element>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(FaqElementWrapper);
