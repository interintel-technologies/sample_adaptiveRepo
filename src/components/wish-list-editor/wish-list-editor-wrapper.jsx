import React, { useEffect, useRef } from 'react';
import './wish-list-editor';



const WishListWrapper = ({ element }) => {
  const WishListRef = useRef(null);

  useEffect(() => {
    if (WishListRef.current && element) {
      WishListRef.current.e = element;
    }
  }, [element]);

  return (
    <div>
      {element ? <wish-list-editor id="wish-list-editor" ref={WishListRef}></wish-list-editor> : <p>Loading data...</p>}
    </div>
  );
};

export default WishListWrapper;
