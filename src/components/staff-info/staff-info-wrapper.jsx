import React, { useState, useEffect, useRef } from 'react';
import './staff-info';
import withDataSource from '../../core/mixins/datasource-mixin';

const StaffInfoWrapper = ({ element }) => {

  const StaffInfoRef = useRef(null);

  useEffect(() => {
    const StaffInfo = StaffInfoRef.current;

    if (StaffInfo && element) {
      StaffInfo.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <staff-info id="staff-info" ref={StaffInfoRef}></staff-info>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(StaffInfoWrapper);
