import React, { useEffect, useRef } from 'react';
import './dropdown-select';
import withDataSource from '../../core/mixins/datasource-mixin';

const DropDownSelectWrapper = (props) => {
  const { element,groups,data, rows, cols } = props
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    if (dropdownRef.current && element) {
     
        dropdownRef.current.e = element;
        dropdownRef.current.groups = groups;
        dropdownRef.current.data = data;
        dropdownRef.current.rows = rows;
        dropdownRef.current.cols = cols;


      }
    
  }, [element, rows, cols]);

  return (
    <>
      {element ? (
        <dropdown-select id="dropdown-select" ref={dropdownRef}></dropdown-select>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(DropDownSelectWrapper);
