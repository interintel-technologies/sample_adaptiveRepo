import React, { useEffect, useRef } from 'react';
import './new-item';

const newItemWrapper = (props) => {
  const { element } = props;
  const newItemRef = useRef(null);

  useEffect(() => {
    
    if (newItemRef.current && element) {
      newItemRef.current.e = element;


    }
  }, [element]);

  return (
    <div>
     
      {element ? (
        <new-item id="new-item" ref={newItemRef}></new-item>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default newItemWrapper;
