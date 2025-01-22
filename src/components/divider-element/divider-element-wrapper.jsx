import React, { useEffect, useRef } from 'react';
import './divider-element';

const DividerElementWrapper = ({element}) => {
  
  const dividerRef = useRef(null);

  useEffect(() => {
    if (dividerRef.current && element) {
      const dividerElement = dividerRef.current;

      dividerElement.e = element;
      dividerElement.name = element[0];
      dividerElement.submit_name = element[4];


      dividerElement.max = element[3];
      dividerElement.min = element[2];
      dividerElement.required = element[9]

    }

  }, [element]);

  return (
  <>
    {element &&  <divider-element id="divider-element" ref={dividerRef}></divider-element> }
    </>
  );
};

export default DividerElementWrapper;
