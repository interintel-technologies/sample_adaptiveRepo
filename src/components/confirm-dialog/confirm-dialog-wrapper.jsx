import React, { useEffect, useRef } from 'react';
import './confirm-dialog';

const ConfirmDialogWrapper = ({ element }) => {
  const confirmDialogWrapper = useRef(null);

  useEffect(() => {
    if (confirmDialogWrapper.current && element) {
      confirmDialogWrapper.current.e = element;
    }
  }, [element]);

  return (
    <>
      {element ? (
        <confirm-dialog id="confirm-dialog" ref={confirmDialogWrapper}></confirm-dialog>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default ConfirmDialogWrapper;
