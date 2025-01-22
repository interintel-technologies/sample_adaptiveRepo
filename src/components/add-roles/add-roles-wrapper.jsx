import React, { useState, useEffect, useRef } from 'react';
import './add-roles';
import withDataSource from '../../core/mixins/datasource-mixin';

const AddRolesWrapper = ({ element,rows,cols}) => {
  
  const AddRolesRef = useRef(null);

  useEffect(() => {
    if (AddRolesRef.current && element) {
      if (AddRolesRef.current.e !== element) {
        AddRolesRef.current.e = element;
      }
      if (AddRolesRef.current.e && rows) {
        AddRolesRef.current.rows = rows;
      }
      if (AddRolesRef.current.e && cols) {
        AddRolesRef.current.cols = cols;
      }
    
    }
  }, [element,rows,cols]);

  return (
    <>
     
      {element && rows.length > 0 && cols.length > 0 ? (
        <add-roles id="add-roles" ref={AddRolesRef}></add-roles>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(AddRolesWrapper);
