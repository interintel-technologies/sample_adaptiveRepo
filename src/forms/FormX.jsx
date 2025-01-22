import React, { useState, useEffect, useRef,useCallback } from 'react';
import { Box, Grid, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import ElementLoader from '../ElementLoader.jsx';
import './form-styles/form-x.css'
import EList from '../Elist.jsx';
import { withFormBase } from '../FormBase.jsx';

const FormX = ({sectionSize, _dialog,oe, title,subtitle,textAlign,service,pageGroups,currentPageGroupName,submitForm,getForm2,skipForm, setCurrentPos,cuerrentPos,setCurrentFeed,currentFeed,feeds,setFeeds }) => {
 
  const formRef = useRef(null);
  const [activeStep, setActiveStep] = useState(cuerrentPos); // State for tracking the active step
  const [currentSteps, setCurrentSteps] = useState([]);
  const [checked, setChecked] = React.useState(false);


  useEffect(() => {
  getForm2(formRef.current)

    if (feeds) {
      if(feeds && currentFeed!=0  && feeds.length > 1 ){
        setChecked(true)
        setActiveStep(currentFeed)
        
      }

      setCurrentSteps(feeds.map((section) => {  
      
        // Check if section[0] exists and has a _title property before accessing it
        return "" || "";
      }));

      window.addEventListener('message',(e)=>handleMessage(e));
      
    }
  }, [feeds]);

  const handleMessage = useCallback(
    (e) => {
      // Validate the incoming message structure
      const data = e?.data;
      if(data){
        if (!('activeStep' in data)) {
          return;
        }else{
          const activeStep = data.activeStep;
      
          // returns the form stepper to first step
          handleStepClick(activeStep)
        }
      }
    },
    [] // Dependencies can remain empty if external references are stable
  );

  useEffect(() => {
    return () => {
      window.removeEventListener("message", handleMessage());
    };
  }, [handleMessage]); // Ensure listener uses the stable handleMessage


  // Handle step change when clicked
  const handleStepClick = (index) => {
    // Update the active step and current feed
    setActiveStep(index);
    setCurrentFeed(index);
    
    // Remove the items that are ahead of the selected index
    setFeeds((prevFeeds) => prevFeeds.slice(0, index + 1));
  };
  

  // Dynamically create steps based on pageSections length
  const steps = feeds ? feeds.map((section) => "") : [];

  // .attr('fill', 'var(--adaptive-ui-icon-stroke-color)'); // Apply the color to the text labels

  

  return (
    <form className='form-x is-paddingless' id="form-x-wrapper form" data-service={service} form-type="FORM X"  ref={formRef}>

{feeds && currentFeed!=0  && feeds.length > 1 && !feeds[currentFeed]._is_get_interface && (
                <Box sx={{ width: '100%', marginBottom:'1rem' }}>
                  
                  <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => (
                      <Step key={index} style={{cursor:"pointer"}} onClick={() => handleStepClick(index)}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              
              )}

 <Typography
      variant="h5" 
      className="mb-0"
      style={{
        paddingBottom: '0.75rem', // Correct CSS syntax for padding
        paddingTop: '0.75rem', // Correct CSS syntax for padding
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

export default withFormBase(FormX);
