import React, { useState, useEffect, useRef } from 'react';
import './share-link';

const ShareLinkWrapper = ({ element }) => {

  const ShareLinkRef = useRef(null);

  useEffect(() => {
    const ShareLink = ShareLinkRef.current;

    if (ShareLink && element) {
      ShareLink.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <share-link id="share-link" ref={ShareLinkRef}></share-link>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default ShareLinkWrapper;
