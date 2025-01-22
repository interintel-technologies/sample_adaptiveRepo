import React, { useEffect, useRef } from 'react';
import './notification-panel';
import withDataSource from '../../core/mixins/datasource-mixin';

const notificationPanel = (props) => {
  const { element, rows,cols, paramsCallback } = props;
  const notificationPaelRef = useRef(null);

  useEffect(() => {
    
    if (notificationPaelRef.current && element) {
      notificationPaelRef.current.e = element;
      notificationPaelRef.current.rows = rows;
      notificationPaelRef.current.cols = cols;

    }
  }, [element, rows, cols]);

  return (
    <div>
     
      {element ? (
        <notification-panel id="notification-panel" ref={notificationPaelRef}></notification-panel>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(notificationPanel);
