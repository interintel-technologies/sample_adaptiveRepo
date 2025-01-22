import React, { useState, useEffect, useRef } from 'react';
import './steps-progress-2';
import withDataSource from '../../core/mixins/datasource-mixin';

const StepsProgress2Wrapper = ({ element }) => {

  const StepsProgress2Ref = useRef(null);

  useEffect(() => {
    const StepsProgress2 = StepsProgress2Ref.current;

    if (StepsProgress2 && element) {
      StepsProgress2.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <steps-progress-2 id="steps-progress-2" ref={StepsProgress2Ref}></steps-progress-2>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(StepsProgress2Wrapper);
