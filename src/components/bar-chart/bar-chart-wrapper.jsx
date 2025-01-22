import React, { useEffect, useRef } from 'react';
import './bar-chart';
import withDataSource from '../../core/mixins/datasource-mixin';

const GroupedBarChart = ({ element, data, rows }) => {
  const groupBarChartRef = useRef(null);

  
  useEffect(() => {
    if (groupBarChartRef.current && rows) {
      groupBarChartRef.current.rows = rows;
      groupBarChartRef.current.e = element;
      groupBarChartRef.current.data = data;

    }
  }, [rows]);

  return (
    <div>
      {element && data && rows ? <bar-chart ref={groupBarChartRef}></bar-chart> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(GroupedBarChart);