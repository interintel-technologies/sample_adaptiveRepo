import React, { useState, useEffect, useRef } from 'react';
import './payment-method-select';
import withDataSource from '../../core/mixins/datasource-mixin';

const PaymentMethodSelectWrapper = ({ element }) => {

  const PaymentMethodSelectRef = useRef(null);

  useEffect(() => {
    const PaymentMethodSelect = PaymentMethodSelectRef.current;

    if (PaymentMethodSelect && element) {
      PaymentMethodSelect.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <payment-method-select id="payment-method-select" ref={PaymentMethodSelectRef}></payment-method-select>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(PaymentMethodSelectWrapper);
