import React, { useEffect, useRef } from 'react';
import './chosen-price';

const ChosenPriceWrapper = ({ element }) => {
  const chosenPriceRed = useRef(null);

  useEffect(() => {
    if (chosenPriceRed.current && element) {
      chosenPriceRed.current.e = element;
    }
  }, [element]);

  return (
    <>
      {element ? (
        <chosen-price id="chosen-price" ref={chosenPriceRed}></chosen-price>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default ChosenPriceWrapper;
