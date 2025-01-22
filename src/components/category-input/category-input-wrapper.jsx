import React, { useEffect, useRef } from 'react';
import withDataSource from '../../core/mixins/datasource-mixin';
import './category-input';

const CategoriesInput = ({ element, data, rows, cols }) => {

  const dataListElementRef = useRef(null);

  useEffect(() => {
    if (dataListElementRef.current) {
      const datalistElement = dataListElementRef.current;
      if (cols && rows) {
        datalistElement.cols = cols;
        datalistElement.rows = rows;
      }
    }
  }, [cols, rows]);

  useEffect(() => {
    if (dataListElementRef.current && element) {
      const datalistElement = dataListElementRef.current;
      datalistElement.e = element;
    }
  }, [element]);

  return (
    <>
      {cols && rows ? <category-input ref={dataListElementRef}></category-input> : <>loading</>}
    </>
  );
};

const CategoriesInputWrapper = withDataSource(CategoriesInput);
export default CategoriesInputWrapper
