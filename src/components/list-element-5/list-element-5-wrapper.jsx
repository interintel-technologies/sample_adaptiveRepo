import React, { useEffect, useRef } from 'react';
import './list-element-5';
import withDataSource from '../../core/mixins/datasource-mixin';


const listElement5Wrapper = (props) => {
  const { element, rows,cols,_dialog } = props;
  
  const listElement5Ref = useRef(null);

  useEffect(() => {
    
    if (listElement5Ref.current && element) {
      listElement5Ref.current.e = element;
      listElement5Ref.current.rows = rows;
      listElement5Ref.current.cols = cols;
      listElement5Ref.current._dialog = _dialog;

    }
  }, [element, rows,cols]);

  return (
    <div>
     
      {element ? (
        <list-element-5 id="list-element-5" ref={listElement5Ref}></list-element-5>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(listElement5Wrapper);

