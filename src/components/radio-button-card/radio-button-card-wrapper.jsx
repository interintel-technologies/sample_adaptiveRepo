import React, { useEffect, useRef } from 'react';
import './radio-button-card';
import withDataSource from '../../core/mixins/datasource-mixin';


const radioButtonCardWrapper = (props) => {
  const { element, rows,cols } = props;
  const radioButtonCardRef = useRef(null);

  useEffect(() => {
    
    if (radioButtonCardRef.current && element) {
      radioButtonCardRef.current.e = element;
      radioButtonCardRef.current.rows = rows;
      radioButtonCardRef.current.cols = cols;

    }
  }, [element, rows, cols]);

  return (
    <div>
     
      {element ? (
        <radio-button-card id="radio-button-card" ref={radioButtonCardRef}></radio-button-card>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(radioButtonCardWrapper);
