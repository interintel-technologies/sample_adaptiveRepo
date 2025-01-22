import React, { useState, useEffect, useRef } from 'react';
import './redirect-element';
import withDataSource from '../../core/mixins/datasource-mixin';

const RedirectElementWrapper = ({ element }) => {

  const RedirectElementRef = useRef(null);

  useEffect(() => {
    const RedirectElement = RedirectElementRef.current;

    if (RedirectElement && element) {
      RedirectElement.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <redirect-element id="redirect-element" ref={RedirectElementRef}></redirect-element>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(RedirectElementWrapper);
