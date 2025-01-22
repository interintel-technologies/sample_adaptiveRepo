import React, { useEffect, useRef } from 'react';
import './line-chart-2';
import withDataSource from '../../core/mixins/datasource-mixin';
import { useTheme } from '@mui/material';


const LineChart2Wrapper = ({ element, data, rows,cols }) => {
  const lineChartRef = useRef(null);
  const theme = useTheme();
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
  const surfaceVariantColor = getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-surfaceVariant');
  const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-secondary');


  useEffect(() => {
    if (lineChartRef.current && element) {
      lineChartRef.current.e = element;
      lineChartRef.current.rows = rows;
      lineChartRef.current.cols = cols;
      lineChartRef.current.theme = theme;
      lineChartRef.current.primaryColor = primaryColor;
      lineChartRef.current.surfaceVariantColor = surfaceVariantColor;
      lineChartRef.current.secondaryColor = secondaryColor;


    }
  }, [element, rows,cols]);

  return (
    <div>
      {element && data && rows ? <line-chart-2 id="line-chart-2" ref={lineChartRef}></line-chart-2> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(LineChart2Wrapper);
