import React, { useEffect, useRef } from 'react';
import './stats-element';
import withDataSource from '../../core/mixins/datasource-mixin';


const StatsElementWrapper = ({ element, data, rows,cols }) => {
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
      {element && data && rows && cols ? <stats-element id="stats-element" ref={statsELementRef}></stats-element> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(StatsElementWrapper);
