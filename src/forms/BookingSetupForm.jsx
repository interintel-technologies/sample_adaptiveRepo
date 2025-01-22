import React, { useState, useEffect, useRef } from 'react';
import { Box, Card, Typography, Divider, Grid } from '@mui/material';
import ElementLoader from '../ElementLoader';
import './form-styles/booking-setup-form.css'
import EList from '../Elist';
import { withFormBase } from '../FormBase';
const BookingSetupForm = ({ oe, title, subtitle,service,pageGroups,currentPageGroupName,submitForm,skipForm,_dialog,getForm2,sectionSize  }) => {
    
  
  const formRef = useRef(null);

  useEffect(() => {
    getForm2(formRef.current)

  });

  return (
    <form className='booking-setup-form' id="booking-setup-form-wrapper form" data-service={service} form-type="BOOKING SETUP FORM"  ref={formRef}>

        <Box sx={{ padding: '16px' }} id="booking-setup-form-wrapper">
            <Card sx={{ padding: '16px' }}>
                <Typography variant="h3" component="h3">
                    {title}
                </Typography>
                <Typography variant="subtitle1" component="h6" color="textSecondary">
                    {subtitle}
                </Typography>
                <Divider sx={{ margin: '16px 0' }} />
                <EList   sectionSize={sectionSize}  oe={oe} pageGroups={pageGroups} currentPageGroupName={currentPageGroupName} submitForm={submitForm} skipForm={skipForm} _dialog={_dialog} getForm2={getForm2} />

            </Card>
        </Box>
        </form>
    );
};

export default withFormBase(BookingSetupForm);
