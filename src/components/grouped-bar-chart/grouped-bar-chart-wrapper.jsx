import React, { useEffect, useRef } from 'react';
import './grouped-bar-chart';
import withDataSource from '../../core/mixins/datasource-mixin';

const GroupedBarChart = ({ element, data, rows }) => {
  const groupBarChartRef = useRef(null);

  
  useEffect(() => {
    if (groupBarChartRef.current && rows) {
      groupBarChartRef.current.rows = rows;
      groupBarChartRef.current.e = element;

    }
  }, [rows]);

  return (
    <div>
      {element && data && rows ? <grouped-bar-chart ref={groupBarChartRef}></grouped-bar-chart> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(GroupedBarChart);