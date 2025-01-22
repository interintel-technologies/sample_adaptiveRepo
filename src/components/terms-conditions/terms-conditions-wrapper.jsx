import React, { useEffect, useRef } from 'react';
import './terms-conditions';

const TermsConditionWrapper = ({ element }) => {
  const termsConditionRef = useRef(null);

  useEffect(() => {
    if (termsConditionRef.current && element) {
      termsConditionRef.current.e = element;
    }
  }, [element]);

  return (
    <div>
      {element  ? <terms-conditions  id="terms-conditions" ref={termsConditionRef}></terms-conditions> : <p>Loading data...</p>}
    </div>
  );
};

export default TermsConditionWrapper;
