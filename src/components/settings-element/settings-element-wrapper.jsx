import React, { useState, useEffect, useRef } from 'react';
import './settings-element';

const SettingsElementWrapper = ({ element }) => {

  const SettingsElementRef = useRef(null);

  useEffect(() => {
    const SettingsElement = SettingsElementRef.current;

    if (SettingsElement && element) {
      SettingsElement.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <settings-element id="settings-element" ref={SettingsElementRef}></settings-element>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default SettingsElementWrapper;
