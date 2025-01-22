import React, { useEffect,useState, useRef } from 'react';
import './payment-status';
import withDataSource from '../../core/mixins/datasource-mixin';

  const PaymentStatusWrapper = ({_dialog, element, rows, cols,oe,cuerrentPos }) => {
  const PaymentStatusRef = useRef(null);
  const [activeStep, setActiveStep] = useState(cuerrentPos);
    const [currentSteps, setCurrentSteps] = useState([]);

  useEffect(() => {
    if (PaymentStatusRef.current && element) {
      PaymentStatusRef.current.e = element;
      PaymentStatusRef.current.rows = rows;
      PaymentStatusRef.current.cols = cols;
      PaymentStatusRef.current._dialog = _dialog;
      PaymentStatusRef.current.oe = oe;
      
    }
  }, [element, rows, cols]);

  return (
    <>
      {element && rows && cols ? (
        <payment-status id="payment-status" ref={PaymentStatusRef}></payment-status>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withDataSource(PaymentStatusWrapper);
