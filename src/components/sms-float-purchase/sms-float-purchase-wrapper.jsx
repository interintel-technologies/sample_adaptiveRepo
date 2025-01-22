import React, { useState, useEffect, useRef } from 'react';
import './sms-float-purchase';
import withDataSource from '../../core/mixins/datasource-mixin';

const SmsFloatPurchaseWrapper = ({ element }) => {

  const SmsFloatPurchaseRef = useRef(null);

  useEffect(() => {
    const SmsFloatPurchase = SmsFloatPurchaseRef.current;

    if (SmsFloatPurchase && element) {
      SmsFloatPurchase.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <sms-float-purchase id="sms-float-purchase" ref={SmsFloatPurchaseRef}></sms-float-purchase>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(SmsFloatPurchaseWrapper);
