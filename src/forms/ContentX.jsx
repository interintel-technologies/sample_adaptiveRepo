import React, { useState, useEffect, useRef } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import ElementLoader from '../ElementLoader.jsx';
import EList from '../Elist.jsx';
import { withFormBase } from '../FormBase.jsx';

const ContentX = ({ oe,pos,sections, title, onSubmit,subtitle,textAlign,service,pageGroups,currentPageGroupName,submitForm,skipForm,_dialog,getForm2,sectionSize }) => {
  const formRef = useRef(null);


    useEffect(() => {
      getForm2(formRef.current)

    });

  
  return (
    <form className='content-x' id="content-x-form-wrapper form"  form-type="CONTENT X"  data-service={service}  ref={formRef}>
 <Typography
      variant="h5" 
      className="mb-0"
      style={{
        padding: '0.75rem', // Correct CSS syntax for padding
        position: 'relative' // Correct CSS syntax for position
      }}
    >
      {title}
    </Typography>      
      <p  className="mb-0" style={{textAlign:{textAlign}}}>{subtitle}</p>

      <EList   sectionSize={sectionSize}  oe={oe} pageGroups={pageGroups} currentPageGroupName={currentPageGroupName} submitForm={submitForm} skipForm={skipForm} _dialog={_dialog} getForm2={getForm2} />

     
    </form>
  );
};

export default  withFormBase(ContentX);
