import React, { useEffect, useRef } from 'react';
import './insight-panel-3';
import withDataSource from '../../core/mixins/datasource-mixin';

const insightPanel3Wrapper = ({ element, rows, cols }) => {
  const inforCTARef = useRef(null);

  useEffect(() => {
    if (inforCTARef.current) {
      inforCTARef.current.e = element;
      inforCTARef.current.rows = rows || [];
      inforCTARef.current.cols = cols || [];
    }
  }, [element, rows, cols]);

  return (
    <div>
      <insight-panel-3 id="insight-panel-3" ref={inforCTARef}></insight-panel-3>
    </div>
  );
};

export default withDataSource(insightPanel3Wrapper);
