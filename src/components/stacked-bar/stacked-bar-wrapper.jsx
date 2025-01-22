import React, { useState, useEffect, useRef } from 'react';
import './stacked-bar';
import withDataSource from '../../core/mixins/datasource-mixin';
import withUtils from '../../core/mixins/utils-mixin';

const stackedBarWrapper = ({ element }) => {

  const stackedBarRef = useRef(null);

  useEffect(() => {
    const stackedBar = stackedBarRef.current;

    if (stackedBar && element) {
      stackedBar.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <stacked-bar id="stacked-bar" ref={stackedBarRef}></stacked-bar>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withUtils(withDataSource(stackedBarWrapper));
