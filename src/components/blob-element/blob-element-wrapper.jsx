import React, {  useEffect, useRef } from 'react';
import './blob-element';

const BlobElementWrapper = ({details}) => {
  const blobElementRef = useRef(null);

  useEffect(() => {
    if (blobElementRef.current && details) {
      blobElementRef.current.details = details
    }

  }, [details]);

  return (
    <div>
      
      {details ? <blob-element id="blob-element" ref={blobElementRef}></blob-element> : <p>Loading data...</p>}

    </div>
  );
};

export default BlobElementWrapper;
