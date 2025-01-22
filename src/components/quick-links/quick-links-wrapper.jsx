import React, { useState, useEffect, useRef } from 'react';
import './quick-links';
import withDataSource from '../../core/mixins/datasource-mixin';

const QuickLinksWrapper = ({ element }) => {

  const QuickLinksRef = useRef(null);

  useEffect(() => {
    const QuickLinks = QuickLinksRef.current;

    if (QuickLinks && element) {
      QuickLinks.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <quick-links id="quick-links" ref={QuickLinksRef}></quick-links>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(QuickLinksWrapper);
