import React, { useState, useEffect, useRef } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import ElementLoader from '../ElementLoader.jsx';
import './form-styles/feedback-form.css'
import EList from '../Elist.jsx';
import { withFormBase } from '../FormBase.jsx';

const FeedBackForm = ({ oe, title,image, onSubmit,subtitle,submitForm,service,pageGroups,currentPageGroupName,getForm2,skipForm,_dialog,sectionSize }) => {
 
  
  const formRef = useRef(null);


  return (
    <form className='feedback-x' id="feedback-form-wrapper form" data-service={service} form-type="FEEDBACK FORM" ref={formRef}>
<div class="content">
                <div class="columns">
                    <div class="column is-5 imgCol">
                        <img src={image}/>
                    </div>
                    <div class="column is-7">
                        <div class="has-text-left my-2 subtitle">
                            <h5>{subtitle}</h5>
                        </div>
                        <EList   sectionSize={sectionSize}  oe={oe} pageGroups={pageGroups} currentPageGroupName={currentPageGroupName} submitForm={submitForm} skipForm={skipForm} _dialog={_dialog} getForm2={getForm2} />

                    </div>
                </div>
            </div>
    
     
    </form>
  );
};

export default withFormBase(FeedBackForm);
