import React, { useEffect, useRef } from 'react';
import './deal-countdown';
import withDataSource from '../../core/mixins/datasource-mixin';

const DealCountdownWrapper = ({ element, rows, cols }) => {
  const dealCountdonwRef = useRef(null);

  useEffect(() => {
    if (dealCountdonwRef.current && element) {
      dealCountdonwRef.current.e = element;
      dealCountdonwRef.current.rows = rows;
      dealCountdonwRef.current.cols = cols;

    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <deal-countdown id="deal-countdown" ref={dealCountdonwRef}></deal-countdown>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(DealCountdownWrapper);
