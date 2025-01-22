import React, { useEffect, useRef } from 'react';
import './wishlist-button';



const WishListButtonWrapper = ({ element }) => {
  const WishListBtnRef = useRef(null);

  useEffect(() => {
    if (WishListBtnRef.current && element) {
      WishListBtnRef.current.e = element;
    }
  }, [element]);

  return (
    <div>
      {element ? <wishlist-button id="wishlist-button" ref={WishListBtnRef}></wishlist-button> : <p>Loading data...</p>}
    </div>
  );
};

export default WishListButtonWrapper;
