import React, { useState, useEffect, useRef } from 'react';
import './share-button';
import withDataSource from '../../core/mixins/datasource-mixin';

const ShareButtonWrapper = ({ element }) => {

  const ShareButtonRef = useRef(null);

  useEffect(() => {
    const ShareButton = ShareButtonRef.current;

    if (ShareButton && element) {
      ShareButton.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <share-button id="share-button" ref={ShareButtonRef}></share-button>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(ShareButtonWrapper);
