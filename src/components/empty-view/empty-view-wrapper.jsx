import React, { useEffect, useRef } from 'react';
import './empty-view';

const EmptyViewWrapper = ({ element }) => {

  
  const emptyViewRef = useRef(null);

  useEffect(() => {
    if (emptyViewRef.current && element) {
      emptyViewRef.current.e = element;
    }
  }, [element]);

  return (
    <>
      {element ? (
        <email-summary ref={emptyViewRef}></email-summary>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default EmptyViewWrapper;
