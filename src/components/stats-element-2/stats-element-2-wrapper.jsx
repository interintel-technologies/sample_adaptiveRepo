import React, { useEffect, useRef } from 'react';
import './stats-element-2';
import withDataSource from '../../core/mixins/datasource-mixin';


const StatsElement2Wrapper = ({ element, data, rows,cols }) => {
  const statsELementRef = useRef(null);
   
  useEffect(() => {
    if (statsELementRef.current && element) {
      statsELementRef.current.e = element;
      statsELementRef.current.data = data;
      statsELementRef.current.rows = rows;
      statsELementRef.current.cols = cols;

    }
  }, [element, data, rows,cols]);

  return (
    <div>
      {element && data && rows && cols ? <stats-element-2 id="stats-element-2" ref={statsELementRef}></stats-element-2> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(StatsElement2Wrapper);
