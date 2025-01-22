import React, { useState, useEffect, useRef } from 'react';
import './pie-chart';
import withDataSource from '../../core/mixins/datasource-mixin';

const PieChartWrapper = ({ element }) => {
  const PieChartRef = useRef(null);

  useEffect(() => {
    console.log('Element:', element); // Debugging line
    if (PieChartRef.current && element) {
      PieChartRef.current.e = element;
    }
  }, [element]);

  return (
    <div>
      {element ? (
        <pie-chart id="pie-chart" ref={PieChartRef}></pie-chart>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(PieChartWrapper);
