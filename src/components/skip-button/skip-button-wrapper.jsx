import React, { useState, useEffect, useRef } from 'react';
import './skip-button';
import withDataSource from '../../core/mixins/datasource-mixin';

const SkipButtonWrapper = ({skipForm, element }) => {

  const SkipButtonRef = useRef(null);

  useEffect(() => {
    const SkipButton = SkipButtonRef.current;

    if (SkipButton && element) {
      SkipButton.e = element;
      SkipButton.skipForm = skipForm
    }
  }, [element]);

  return (
    <div>
      {element ? (
        <skip-button id="skip-button" ref={SkipButtonRef}></skip-button>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(SkipButtonWrapper);

