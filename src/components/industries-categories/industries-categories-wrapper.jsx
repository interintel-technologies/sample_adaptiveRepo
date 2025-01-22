import React, { useState, useEffect, useRef } from 'react';
import './industries-categories';
import withDataSource from '../../core/mixins/datasource-mixin';

const IndustriesCategoriesWrapper = (props) => {
  const { element, rows,cols } = props;
  const industriesCategoriesRef = useRef(null);

  useEffect(() => {
    if (industriesCategoriesRef.current && element) {
      industriesCategoriesRef.current.e = element;
      industriesCategoriesRef.current.rows = rows;
      industriesCategoriesRef.current.cols = cols;
    }

  }, [element, rows, cols]);

  return (
    <div>
      
      {element ? <industries-categories id="industries-categories" ref={industriesCategoriesRef}></industries-categories> : <p>Loading data...</p>}

    </div>
  );
};

export default withDataSource(IndustriesCategoriesWrapper);
