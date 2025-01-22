import React, { useEffect, useRef } from 'react';
import './specialization-selector';
import withDataSource from '../../core/mixins/datasource-mixin';


const SpecializationSelectorWrapper = ({ element, data, rows,cols }) => {
  const specializationSelectorRef = useRef(null);
 
  useEffect(() => {
    if (specializationSelectorRef.current && element) {
      specializationSelectorRef.current.e = element;
      specializationSelectorRef.current.data = data;
      specializationSelectorRef.current.rows = rows;
      specializationSelectorRef.current.cols = cols;

    }
  }, [element, data, rows,cols]);

  return (
    <div>
      {element && data && rows ? <specialization-selector id="specialization-selector" ref={specializationSelectorRef}></specialization-selector> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(SpecializationSelectorWrapper);
