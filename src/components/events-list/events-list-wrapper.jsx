import React, { useEffect, useRef } from 'react';
import './events-list';
import withDataSource from '../../core/mixins/datasource-mixin';

const EventsListWrapper = ({ element, rows, cols }) => {
  const eventListRef = useRef(null);

  useEffect(() => {
    if (eventListRef.current && element) {
      eventListRef.current.e = element;
      eventListRef.current.rows = rows;
      eventListRef.current.cols = cols;

    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <events-list id="events-list" ref={eventListRef}></events-list>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(EventsListWrapper);
