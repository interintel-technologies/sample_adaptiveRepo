import React, { useEffect, useRef } from 'react';
import './tag-input';
import withDataSource from '../../core/mixins/datasource-mixin';

const TagInputWrapper = ({ element, data, rows,cols }) => {
  const tagInputRef = useRef(null);
  

  useEffect(() => {
    if (tagInputRef.current && element) {
      tagInputRef.current.e = element;
      tagInputRef.current.data = data;
      tagInputRef.current.rows = rows;
      tagInputRef.current.cols = cols;

    }
  }, [element, data, rows,cols]);

  return (
    <div>
      {element && data && rows ? <tag-input id="tag-input" ref={tagInputRef}></tag-input> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(TagInputWrapper);
