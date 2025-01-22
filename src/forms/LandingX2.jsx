
import React, { useEffect, useRef, useState } from 'react';
import { Grid, Typography, Box, Button, Card, CardContent } from '@mui/material';
import { withFormBase } from '../FormBase.jsx';
import EList from '../Elist.jsx';
// import BlobElement from '../BlobElement'; // Placeholder for custom Blob component

const LandingX = ({ id, details, pageGroups,service, title,oe,currentPageGroup,currentPageGroupName,submitForm,skipForm,_dialog,getForm2,sectionSize }) => {
  const formRef = useRef(null);
  const [subTitle,setSubTitle] = useState("")

  useEffect(() => {
    if (details) {
      setSubTitle(details.text || '');
      

    }
  }, [details]);

  

  return (
   


<section className="section" style={{padding:"2%"}} id={id.toLowerCase()}>
 
    <form id="form landing-form-2" data-service={service} form-type="LANDING FORM 2"  ref={formRef}>
        <Grid container spacing={2} >
          <Grid item xs={12}>
            <Box marginTop={0}>
              <Grid container spacing={0}>

              <Grid item xs={6} style={{display: "flex",flexDirection: "column",justifyContent: "center"}}>
                  <p slot="title" class="title is-capitalized" >{title}</p>
          <p slot="subtitle" class="subtitle">{subTitle}</p>

                </Grid>
              <Grid item xs={6}>
              <EList   sectionSize={sectionSize}  oe={oe} pageGroups={pageGroups} currentPageGroupName={currentPageGroupName} submitForm={submitForm} skipForm={skipForm} _dialog={_dialog} getForm2={getForm2} />
           
           </Grid>

             
              </Grid>
            </Box>
          </Grid>
     
        </Grid>
     
    </form>
    
    </section>

  );
};

export default withFormBase(LandingX);


