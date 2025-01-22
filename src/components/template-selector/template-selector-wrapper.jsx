import React, { useEffect, useRef } from 'react';
import './template-selector';
import withDataSource from '../../core/mixins/datasource-mixin';

const TemplateSelectorWrapper = ({ element, data, rows }) => {
  const templateSelectorRef = useRef(null);

  useEffect(() => {
    if (templateSelectorRef.current && element) {
      templateSelectorRef.current.e = element;
      templateSelectorRef.current.data = data;
      templateSelectorRef.current.rows = rows;
    }
  }, [element, data, rows]);

  return (
    <div>
      {element && data && rows ? <template-selector  id="template-selector" ref={templateSelectorRef}></template-selector> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(TemplateSelectorWrapper);
