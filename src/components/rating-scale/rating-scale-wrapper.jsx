import React, { useState, useEffect, useRef } from 'react';
import './rating-scale';
import withDataSource from '../../core/mixins/datasource-mixin';

const RatingScaleWrapper = ({ element }) => {

  const RatingScaleRef = useRef(null);

  useEffect(() => {
    const RatingScale = RatingScaleRef.current;

    if (RatingScale && element) {
      RatingScale.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <rating-scale id="rating-scale" ref={RatingScaleRef}></rating-scale>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(RatingScaleWrapper);
