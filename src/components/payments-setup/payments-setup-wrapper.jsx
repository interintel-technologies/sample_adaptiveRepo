import React, { useState, useEffect, useRef } from 'react';
import './payments-setup';
import withDataSource from '../../core/mixins/datasource-mixin';

const PaymentsSetupWrapper = ({ element }) => {

  const PaymentsSetupRef = useRef(null);

  useEffect(() => {
    const PaymentsSetup = PaymentsSetupRef.current;

    if (PaymentsSetup && element) {
      PaymentsSetup.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <payments-setup id="payments-setup" ref={PaymentsSetupRef}></payments-setup>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(PaymentsSetupWrapper);
