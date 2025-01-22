import React, { useEffect, useRef } from 'react';
import withDataSource from '../../core/mixins/datasource-mixin';
import './categories-grid';

const CategoriesGridWrapper = ({ element, data, rows, cols }) => {

  const categoriesGridRef = useRef(null);

  useEffect(() => {
    if (categoriesGridRef.current) {
      const categoriesGridElement = categoriesGridRef.current;
      if (cols && rows) {
        categoriesGridElement.cols = cols;
        categoriesGridElement.rows = rows;
      }
    }
  }, [cols, rows]);

  useEffect(() => {
    if (categoriesGridRef.current && element) {
      const categoriesGridElement = categoriesGridRef.current;
      categoriesGridElement.e = element;
    }
  }, [element]);

  return (
    <>
      {cols && rows ? <categories-grid ref={categoriesGridRef}></categories-grid> : <>loading</>}
    </>
  );
};

export default withDataSource(CategoriesGridWrapper);
