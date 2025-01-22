import React, { useEffect, useRef } from 'react';
import './client-counter';

const ClientCounterWrapper = ({ element }) => {
  const clientCounterRef = useRef(null);

  useEffect(() => {
    if (clientCounterRef.current && element) {
      clientCounterRef.current.e = element;
    }
  }, [element]);

  return (
    <>
      {element ? (
        <client-counter id="client-counter" ref={clientCounterRef}></client-counter>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default ClientCounterWrapper;
