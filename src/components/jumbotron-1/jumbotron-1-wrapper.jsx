import React, {  useEffect, useRef } from 'react';
import './jumbotron-1';

const JumboTron1Wrapper = ({element}) => {
  
  const JumboTronRef = useRef(null);

  useEffect(() => {
    if (JumboTronRef.current && element) {
      JumboTronRef.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <jumbotron-1 id="jumbotron-1" ref={JumboTronRef}></jumbotron-1> : <p>Loading data...</p>}

    </div>
  );
};

export default JumboTron1Wrapper;
