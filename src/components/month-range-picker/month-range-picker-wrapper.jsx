import React, { useState, useEffect, useRef } from 'react';
import './month-range-picker';
import withDataSource from '../../core/mixins/datasource-mixin';

const MonthRangePickerWrapper = ({ element, data,cols, rows}) => {
  
  const heroElementRef = useRef(null);

  useEffect(() => {
    if (heroElementRef.current && element) {
      if (heroElementRef.current.e !== element) {
        heroElementRef.current.e = element;
      }

      if (heroElementRef.current.e && rows) {
        heroElementRef.current.rows = rows;
      }

      if (heroElementRef.current.e && cols) {
        heroElementRef.current.cols = cols;
      }

 

      
    
    }
  }, [element,data]);

  return (
    <>
     
      {element && data && rows ? (
        <month-range-picker id="month-range-picker" ref={heroElementRef}></month-range-picker>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(MonthRangePickerWrapper);
