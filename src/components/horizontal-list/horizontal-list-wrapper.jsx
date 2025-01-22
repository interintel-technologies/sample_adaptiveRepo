import React, { useEffect, useRef } from 'react';
import './horizontal-list';
import withDataSource from '../../core/mixins/datasource-mixin';

const HorizontalListWrapper = ({_dialog, element, rows, cols }) => {
  const horizotalListRef = useRef(null);

  useEffect(() => {
    if (horizotalListRef.current && element) {
      horizotalListRef.current.e = element;
      horizotalListRef.current.rows = rows;
      horizotalListRef.current.cols = cols;
      horizotalListRef.current._dialog = _dialog;
      
    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <horizontal-list id="horizontal-list" ref={horizotalListRef}></horizontal-list>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(HorizontalListWrapper);
