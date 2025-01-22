
import React, { useEffect, useRef, useState } from 'react';
import { Grid, Typography, Box, Button, Card, CardContent } from '@mui/material';
import { withFormBase } from '../FormBase.jsx';
// import BlobElement from '../BlobElement'; // Placeholder for custom Blob component
import './form-styles/landing-x.css'
import EList from '../Elist.jsx';

const LandingX = ({sectionHeight, id, service, pageGroups, oe,submitForm,currentPageGroupName,_dialog,getForm2,sectionSize }) => {
  const formRef = useRef(null);

  useEffect(() => {
    getForm2(formRef.current)

  });

  return (
   
<section className="section" id={id.toLowerCase()}>
  
    <div id="landing-x-wrapper">
    <form  id="form landind-x-form" data-service={service} form-type="LANDING X FORM" ref={formRef}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Box marginTop={0}>
            <EList
                sectionHeight={sectionHeight}
                _dialog={_dialog}
                oe={oe}
                pageGroups={pageGroups}
                currentPageGroupName={currentPageGroupName}
                submitForm={submitForm}
                getForm2={getForm2}
                sectionSize={sectionSize}
              />
            </Box>
          
          </Grid>
          <Grid item xs={12}>
            <Box marginTop={2}>
              
            </Box>
          </Grid>
        </Grid>
     
    </form>
    </div>
    </section>

  );
};

export default withFormBase(LandingX);


