import React, { useEffect, useRef } from 'react';
import './navbar-default';

const navbarDefaultWrapper = (props) => {
  const { element } = props;
  const navbarDefaultRef = useRef(null);

  useEffect(() => {
    
    if (navbarDefaultRef.current && element) {
      navbarDefaultRef.current.e = element;


    }
  }, [element]);

  return (
    <div>
     
      {element ? (
        <navbar-default id="navbar-default" ref={navbarDefaultRef}></navbar-default>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default navbarDefaultWrapper;
