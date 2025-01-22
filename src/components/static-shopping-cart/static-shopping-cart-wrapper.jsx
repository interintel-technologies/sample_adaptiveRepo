import React, { useEffect, useRef } from 'react';
import './static-shopping-cart';

const StaticShoppingCartWrapper = ({element}) => {
  
  const staticShoppingCartRef = useRef(null);

  useEffect(() => {
    if (staticShoppingCartRef.current && element) {
      const pinInputElement = staticShoppingCartRef.current;

      pinInputElement.e = element;

    }

  }, [element]);

  return (
  <>
    {element &&  <static-shopping-cart id="static-shopping-cart" ref={staticShoppingCartRef}></static-shopping-cart> }
    </>
  );
};

export default StaticShoppingCartWrapper;
