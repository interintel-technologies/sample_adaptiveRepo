import React, { useEffect, useRef } from 'react';
import './bank-instructions';

const BankInstructionsWrapper = ({element}) => {
  
  const bankInstructionsRef = useRef(null);

  useEffect(() => {
    if (bankInstructionsRef.current && element) {
      const bankInstructionsElement = bankInstructionsRef.current;

      bankInstructionsElement.e = element;

    }

  }, [element]);

  return (
  <>
    {element &&  <bank-instructions id="bank-instructions" ref={bankInstructionsRef}></bank-instructions> }
    </>
  );
};

export default BankInstructionsWrapper;
