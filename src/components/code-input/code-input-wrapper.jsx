import React, { useEffect, useRef } from 'react';
import './code-input';

const CodeInputWrapper = ({ element }) => {
  const codeInputRef = useRef(null);

  useEffect(() => {
    if (codeInputRef.current && element) {
      codeInputRef.current.e = element;
    }
  }, [element]);

  return (
    <>
      {element ? (
        <code-input id="code-input" ref={codeInputRef}></code-input>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default CodeInputWrapper;
