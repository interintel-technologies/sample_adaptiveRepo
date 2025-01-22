import React, { useEffect, useRef } from 'react';
import './split-details';
import withDataSource from '../../core/mixins/datasource-mixin';


const SplitDetailsWrapper = ({ element, data, rows,cols }) => {
  const splitDetailsRef = useRef(null);
   
  useEffect(() => {
    if (splitDetailsRef.current && element) {
      splitDetailsRef.current.e = element;
      splitDetailsRef.current.data = data;
      splitDetailsRef.current.rows = rows;
      splitDetailsRef.current.cols = cols;

    }
  }, [element, data, rows,cols]);

  return (
    <div>
      {element && data && rows && cols ? <split-details id="split-details" ref={splitDetailsRef}></split-details> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(SplitDetailsWrapper);
