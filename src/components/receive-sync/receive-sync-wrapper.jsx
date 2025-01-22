import React, {  useEffect, useRef } from 'react';
import './receive-sync';

const ReceiveSyncWrapper = ({element}) => {
  
  const ReceiveSyncRef = useRef(null);

  useEffect(() => {
    if (ReceiveSyncRef.current && element) {
      ReceiveSyncRef.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <receive-sync id="receive-sync" ref={ReceiveSyncRef}></receive-sync> : <p>Loading data...</p>}

    </div>
  );
};

export default ReceiveSyncWrapper;
