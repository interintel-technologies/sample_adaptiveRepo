import React, { useState, useEffect, useRef } from 'react';
import './payments-page-bar';
import withDataSource from '../../core/mixins/datasource-mixin';

const PaymentsPageBarWrapper = ({ element }) => {

  const PaymentsPageBarRef = useRef(null);

  useEffect(() => {
    const PaymentsPageBar = PaymentsPageBarRef.current;

    if (PaymentsPageBar && element) {
      PaymentsPageBar.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <payments-page-bar id="payments-page-bar" ref={PaymentsPageBarRef}></payments-page-bar>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(PaymentsPageBarWrapper);
