import React, { useEffect,useState, useRef } from 'react';
import './card-payment-status';

  const CardPaymentStatusWrapper = ({ element }) => {
  const PaymentStatusRef = useRef(null);

  useEffect(() => {
    if (PaymentStatusRef.current && element) {
      PaymentStatusRef.current.e = element;

      
    }
  }, [element]);

  return (
    <>
      {element ? (
        <card-payment-status id="card-payment-status" ref={PaymentStatusRef}></card-payment-status>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default CardPaymentStatusWrapper;
