import React, { useEffect, useRef } from 'react';
import './next-client';
import withDataSource from '../../core/mixins/datasource-mixin';

const NextClientWrapper = (props) => {
  const { element, rows, lines,cols } = props;
  const nextClientRef = useRef(null);

  useEffect(() => {
    if (nextClientRef.current) {
      if (element) nextClientRef.current.e = element;
      if (rows) nextClientRef.current.rows = rows;
      if (lines) nextClientRef.current.lines = lines;
      if (lines) nextClientRef.current.cols = cols;

    }
  }, [element, rows, lines]);

  return (
    <div>
      {element ? (
        <next-client id="next-client" ref={nextClientRef}></next-client>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(NextClientWrapper);
