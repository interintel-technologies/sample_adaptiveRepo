import React, { useState, useEffect, useRef } from 'react';
import './quote-element';
import withDataSource from '../../core/mixins/datasource-mixin';

const QuoteElementWrapper = ({ element }) => {

  const QuoteElementRef = useRef(null);

  useEffect(() => {
    const QuoteElement = QuoteElementRef.current;

    if (QuoteElement && element) {
      QuoteElement.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <quote-element id="quote-element" ref={QuoteElementRef}></quote-element>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(QuoteElementWrapper);
