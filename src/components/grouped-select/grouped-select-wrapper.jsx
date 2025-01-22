import React, { useEffect, useRef } from 'react';
import './grouped-select';
import withDataSource from '../../core/mixins/datasource-mixin';

const GroupedSelect = ({ element, data,cols, rows }) => {
  const groupedSelectRef = useRef(null);
  
  useEffect(() => {
    if (groupedSelectRef.current && rows.length > 0) {
      
      groupedSelectRef.current.rows = rows;
      groupedSelectRef.current.cols = cols;

      groupedSelectRef.current.e = element;
      groupedSelectRef.current.data = data;


    }
  }, [rows]);

  return (
    <div>
      {element && data && rows ? <grouped-select ref={groupedSelectRef}></grouped-select> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(GroupedSelect);