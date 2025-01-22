import React, { useEffect, useRef } from 'react';
import './notification-button';
import withDataSource from '../../core/mixins/datasource-mixin';

const notificationButtonWrapper = (props) => {
  const { element, rows,cols, paramsCallback } = props;
  const notificationButtonRef = useRef(null);

  useEffect(() => {
    
    if (notificationButtonRef.current && element) {
      notificationButtonRef.current.e = element;
      notificationButtonRef.current.rows = rows;
      notificationButtonRef.current.cols = cols;

    }
  }, [element, rows, cols]);

  return (
    <div>
     
      {element ? (
        <notification-button id="notification-button" ref={notificationButtonRef}></notification-button>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(notificationButtonWrapper);
