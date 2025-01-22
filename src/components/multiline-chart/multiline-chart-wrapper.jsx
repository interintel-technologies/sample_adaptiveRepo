import React, { useState, useEffect, useRef } from 'react';
import './multiline-chart';
import withDataSource from '../../core/mixins/datasource-mixin';

const MulitLineChart = ({ element, rows,cols }) => {
  
  const mulitLineChartRef = useRef(null);

  useEffect(() => {
    if (mulitLineChartRef.current && element) {
      if (mulitLineChartRef.current.e !== element) {
        mulitLineChartRef.current.e = element;
      }
      mulitLineChartRef.current.rows = rows;
      mulitLineChartRef.current.cols = cols;

    }
  }, [element, rows,cols]);

  return (
    <>
     
      {element ? (
        <multiline-chart id="multiline-chart" ref={mulitLineChartRef}></multiline-chart>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

const MulitLineChartWrapper =  withDataSource(MulitLineChart);
export default MulitLineChartWrapper
