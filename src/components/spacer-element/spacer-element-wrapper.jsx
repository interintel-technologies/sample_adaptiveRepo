import React, { useState, useEffect, useRef } from 'react';

import withDataSource from '../../core/mixins/datasource-mixin';

const SpacerElementWrapper = ({element}) => {
  const spacerElementRef = useRef(null);

  useEffect(() => {
    if (spacerElementRef.current && element) {
      spacerElementRef.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <space-element id="spacer-element" ref={spacerElementRef}></space-element> : <p>Loading data...</p>}

    </div>
  );
};

export default SpacerElementWrapper;
