import React, {  useEffect, useRef } from 'react';
import './section-title'
import withDataSource from '../../core/mixins/datasource-mixin';

const SectionTitleWrapper = ({element,rows, cols }) => {
  const sectionTitleRef = useRef(null);

  useEffect(() => {
    if (sectionTitleRef.current && element) {
      sectionTitleRef.current.e = element
      sectionTitleRef.current.rows = rows;
      sectionTitleRef.current.cols = cols;

    }

  }, [element]);

  return (
    <div>
      {element ? <section-title id="section-title" ref={sectionTitleRef}></section-title> : <p>Loading data...</p>}

    </div>
  );
};

export default withDataSource(SectionTitleWrapper);
