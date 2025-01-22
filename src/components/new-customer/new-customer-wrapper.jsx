import React, { useEffect, useRef } from 'react';
import './new-customer';

const newCustomerWrapper = (props) => {
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
        <new-customer id="new-customer" ref={newItemRef}></new-customer>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default newCustomerWrapper;
