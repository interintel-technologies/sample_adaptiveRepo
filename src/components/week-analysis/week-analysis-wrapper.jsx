import React, { useState, useEffect, useRef } from 'react';
import './week-analysis';
import withDataSource from '../../core/mixins/datasource-mixin';

const WeekAnalysisWrapper = ({ element, rows, cols }) => {

  const weekAnalysisRef = useRef(null);

  useEffect(() => {
    const weekAnalysisElement = weekAnalysisRef.current;

    if (weekAnalysisElement && element) {
      weekAnalysisElement.e = element;
      weekAnalysisElement.rows = rows;
      weekAnalysisElement.cols = cols;
    }
  }, [element, rows, cols]);

  return (
    <div>
      {element ? (
        <week-analysis id="week-analysis" ref={weekAnalysisRef}></week-analysis>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(WeekAnalysisWrapper);
