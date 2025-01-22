import React, { useEffect, useRef } from 'react';
import './summary-chart';
import withDataSource from '../../core/mixins/datasource-mixin';
import { useTheme } from '@mui/material';


const SummaryChartWrapper = ({ element, data, rows,cols }) => {
  const summaryChartRef = useRef(null);
  const theme = useTheme();
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
  const surfaceVariantColor = getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-surfaceVariant');
  const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-secondary');


  useEffect(() => {
    if (summaryChartRef.current && element) {
      summaryChartRef.current.e = element;
      summaryChartRef.current.rows = rows;
      summaryChartRef.current.cols = cols;
      summaryChartRef.current.theme = theme;
      summaryChartRef.current.primaryColor = primaryColor;
      summaryChartRef.current.surfaceVariantColor = surfaceVariantColor;
      summaryChartRef.current.secondaryColor = secondaryColor;


    }
  }, [element, rows,cols]);

  return (
    <div>
      {element && data && rows ? <summary-chart id="summary-chart" ref={summaryChartRef}></summary-chart> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(SummaryChartWrapper);
