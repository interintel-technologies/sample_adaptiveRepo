import React, { useEffect, useRef } from 'react';
import './dropdown-details';
import withDataSource from '../../core/mixins/datasource-mixin';

const DropDownDetailsWrapper = ({ element, rows, cols }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (dropdownRef.current) {
      if (element) {
        dropdownRef.current.e = element;
        console.log('Element set in useEffect:', element);
      }
      if (rows && rows.length > 0) {
        dropdownRef.current.rows = rows;
        console.log('Rows set in useEffect:', rows);
      }
      if (cols && cols.length > 0) {
        dropdownRef.current.cols = cols;
        console.log('Cols set in useEffect:', cols);
      }
    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && rows.length > 0 && cols && cols.length > 0 ? (
        <dropdown-details ref={dropdownRef}></dropdown-details>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(DropDownDetailsWrapper);
