import React, { useEffect, useRef } from 'react';
import './messages-list';
import withDataSource from '../../core/mixins/datasource-mixin';

const messageListWrapper = ({ element,rows,cols }) => {

  
  const messageListRef = useRef(null);

  useEffect(() => {
    if (messageListRef.current && element) {
      messageListRef.current.e = element;
      messageListRef.current.rows = rows;
      messageListRef.current.cols = cols;

    }
  }, [element, rows,cols]);

  return (
    <>
      {element ? (
        <messages-list id="messages-list" ref={messageListRef}></messages-list>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(messageListWrapper);
