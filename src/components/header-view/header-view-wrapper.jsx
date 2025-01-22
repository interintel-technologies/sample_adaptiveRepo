import React, {  useEffect, useRef } from 'react';
import './header-view';

const HeaderViewWrapper = ({element}) => {
  
  const HeaderViewRef = useRef(null);

  useEffect(() => {
    if (HeaderViewRef.current && element) {
      HeaderViewRef.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <header-view id="header-view" ref={HeaderViewRef}></header-view> : <p>Loading data...</p>}

    </div>
  );
};

export default HeaderViewWrapper;
