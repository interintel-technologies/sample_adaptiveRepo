import React, { useState, useEffect, useRef } from 'react';
import './service-button';
import { Fade, Zoom } from '@mui/material';

const ServiceButtonWrapper = ({_dialog, element }) => {

  const ServiceButtonRef = useRef(null);
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    const ServiceButton = ServiceButtonRef.current;
    setChecked(true)
    if (ServiceButton && element) {
      ServiceButton.e = element;
      ServiceButton._dialog = _dialog;



    }
  }, [element]);

  return (
    <Fade in={checked}>
        <service-button id="service-button" ref={ServiceButtonRef}></service-button>
     </Fade>

     
  );
};

export default ServiceButtonWrapper;
