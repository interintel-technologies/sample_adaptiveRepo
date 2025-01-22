import React, { useState, useEffect, useRef } from 'react';
import './steps-timeline';
import withDataSource from '../../core/mixins/datasource-mixin';

const StepsTimelineWrapper = ({ element }) => {

  const StepsTimelineRef = useRef(null);

  useEffect(() => {
    const StepsTimeline = StepsTimelineRef.current;

    if (StepsTimeline && element) {
      StepsTimeline.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <steps-timeline id="steps-timeline" ref={StepsTimelineRef}></steps-timeline>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(StepsTimelineWrapper);
