import React, { useEffect, useRef } from 'react';
import './line-chart';
import withDataSource from '../../core/mixins/datasource-mixin';
import { useTheme } from '@mui/material';


const LineChartWrapper = ({ element, data, rows,cols }) => {
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
      {element && data && rows ? <line-chart id="line-chart" ref={lineChartRef}></line-chart> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(LineChartWrapper);
