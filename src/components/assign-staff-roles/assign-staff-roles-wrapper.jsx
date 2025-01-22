import React, { useEffect, useRef } from 'react';
import './assign-staff-roles';
import withDataSource from '../../core/mixins/datasource-mixin';

const assignStaffRolesWrapper = ({ element, rows, cols }) => {
  const assignStaffRef = useRef(null);

  useEffect(() => {
    if (assignStaffRef.current && element) {
      assignStaffRef.current.e = element;
      assignStaffRef.current.rows = rows;
      assignStaffRef.current.cols = cols;
    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <assign-staff-roles id="assign-staff-roles" ref={assignStaffRef}></assign-staff-roles>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(assignStaffRolesWrapper);
