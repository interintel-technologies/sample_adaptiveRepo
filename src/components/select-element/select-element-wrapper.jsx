import React, {  useEffect, useRef } from 'react';
import './select-element'


const SelectElementWrapper = ({element}) => {
  const sectionTitleRef = useRef(null);

  useEffect(() => {
    if (sectionTitleRef.current && element) {
      sectionTitleRef.current.e = element
    }

  }, [element]);

  return (
    <div>
      {element ? <select-element id="select-element" ref={sectionTitleRef}></select-element> : <p>Loading data...</p>}

    </div>
  );
};

export default SelectElementWrapper;
