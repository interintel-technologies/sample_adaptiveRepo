import React, { useEffect, useRef } from 'react';
import './cc-input';

const CCInputWrapper = ({ element}) => {
  const ccInputRef = useRef(null);

  useEffect(() => {
    if (ccInputRef.current && element) {
      ccInputRef.current.e = element;

    }
  }, [element]);

  return (
    <>
      {element ? (
        <cc-input id="cc-input" ref={ccInputRef}></cc-input>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default CCInputWrapper;
