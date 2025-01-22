import React, { useEffect, useRef } from 'react';
import './list-element-2';
import withDataSource from '../../core/mixins/datasource-mixin';

const listElement2Wrapper = (props) => {
  const { element, rows } = props;
  const listElement2Ref = useRef(null);

  useEffect(() => {
    
    if (listElement2Ref.current && element) {
      listElement2Ref.current.e = element;
      listElement2Ref.current.rows = rows;
    }
  }, [element, rows]);

  return (
    <div>
     
      {element ? (
        <list-element-2 id="list-element-2" ref={listElement2Ref}></list-element-2>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(listElement2Wrapper);
