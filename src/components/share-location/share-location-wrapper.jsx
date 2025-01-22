import React, { useState, useEffect, useRef } from 'react';
import './share-location';

const ShareLocationWrapper = ({ element }) => {

  const ShareLocationRef = useRef(null);

  useEffect(() => {
    const ShareLocation = ShareLocationRef.current;

    if (ShareLocation && element) {
      ShareLocation.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <share-location id="share-location" ref={ShareLocationRef}></share-location>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default ShareLocationWrapper;
