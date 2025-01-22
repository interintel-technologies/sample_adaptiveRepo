import React, { useEffect, useRef, useState } from 'react';
import { Grid, Box, Typography, Stepper, Step, StepLabel } from '@mui/material';
import { withFormBase } from '../FormBase.jsx';
import BlobElementWrapper from '../components/blob-element/blob-element-wrapper.jsx';
import EList from '../Elist.jsx';

const SessionX = ({
  title, details, oe, currentFeed,feeds, service, setCurrentFeed,
  getForm2, submitForm, _dialog, setFeeds, pageGroups, currentPageGroupName,
  setCurrentPos,cuerrentPos,sectionSize,skipForm
}) => {
  const blobElementRef = useRef(null);
  const gatewayDetailsName = window.PAYLOAD.response.get_gateway_details.name;
  const formRef = useRef(null);
  const [activeStep, setActiveStep] = useState(cuerrentPos); // State for tracking the active step
  const [currentSteps, setCurrentSteps] = useState([]);
  const [checked, setChecked] = React.useState(false);
  const hasBlobElement = oe.some(item => item.__1 === "BLOB ELEMENT");

  useEffect(() => {
    if (blobElementRef.current && details) {
      blobElementRef.current.e = { details: getBlobDetails() };
    }
  }, [formRef, details]);

  const getBlobDetails = () => {
    const blob = details.blob;
    return blob !== undefined ? blob : {};
  };

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
      
    }
  }, [feeds]);

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

  return (
    <form id="form session-form" data-service={service} form-type="SESSION FORM" ref={formRef}>
      <Grid
        container
        spacing={2}
        className="background-image-container"
        style={{
          height: '100vh',
          backgroundSize: '100% 100%',
          marginTop: '0 !important',
        }}
      >
        {gatewayDetailsName === "MIPAY" ? (
          <>
            <Grid item xs={12} paddingTop={0} className="mobile-title">
              <div className="titles">
                <div className="title-container">
                  <div className="centDiv">
                    <div className="title-container-wrapper">
                      <img
                        className="logo-img"
                        src="https://mipay.cash/media/administration_gateway_logo/mipay.png"
                        alt="Logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={7} paddingTop={0} className="session-title-container">
              {/* <img
                src="/static/dsv3.0/images/web/MipayLoginBackground.png"
                className="background-img"
                alt=""
              />
              <div className="overlay-content">
                <img
                  src="https://mipay.cash/media/administration_gateway_logo/mipay.png"
                  className="logo mb-4"
                  alt="logo"
                />
                {hasBlobElement && <BlobElementWrapper details={details} />}
              </div> */}


              <img
              src="/static/dsv3.0/images/web/mipay_landingBg.svg"
              className="background-img desktop-bg"
              alt=""
            />

            {/* Mobile Background */}
            <img
              src="/static/dsv3.0/images/web/mipay_mobile_landing.svg"
              className="background-img mobile-bg"
              alt=""
            />

            <div className="overlay-content">
              {/* <Typography variant="h3" style={{ zIndex: 9999 }}>{details.title}</Typography>
              <Typography variant="h6" style={{ zIndex: 9999 }}>{details.subtitle}</Typography> */}
              <img
                  src="https://mipay.cash/media/administration_gateway_logo/mipay.png"
                  className="logo mb-4"
                  alt="logo"
                />
            {hasBlobElement && <BlobElementWrapper details={details} />}
            </div>
            </Grid>
          </>
        ) : gatewayDetailsName === "NenaSasa" ? (
          <Grid item xs={12} md={7} paddingTop={0} className="session-title-container">
            <img
              // src="/static/dsv3.0/images/web/nenasasa_Bg.svg"
              src="/static/dsv3.0/images/web/nenasasa_landing_bg.svg"
              className="background-img desktop-bg"
              alt=""
            />

            {/* Mobile Background */}
            <img
              src="/static/dsv3.0/images/web/nenasasa_mobile_landing.svg"
              className="background-img mobile-bg"
              alt=""
            />

            <div className="overlay-content">
              <Typography variant="h3" style={{ zIndex: 9999 }}>{details.title}</Typography>
              <Typography variant="h6" style={{ zIndex: 9999 }}>{details.subtitle}</Typography>
            {hasBlobElement && <BlobElementWrapper details={details} />}
            </div>
          </Grid>
        ) :  gatewayDetailsName === "NikoBizz Mobile" ? (
          <Grid item xs={12} md={7} paddingTop={0} className="session-title-container">
            <img
              // src="/static/dsv3.0/images/web/nenasasa_Bg.svg"
              src="/static/dsv3.0/images/web/nikobizz_bg_landing.svg"
              className="background-img desktop-bg"
              alt=""
            />

            {/* Mobile Background */}
            <img
              src="/static/dsv3.0/images/web/nikobizz_mobile_landing.svg"
              className="background-img mobile-bg"
              alt=""
            />

            <div className="overlay-content">
              <Typography variant="h3" style={{ zIndex: 9999 }}>{details.title}</Typography>
              <Typography variant="h6" style={{ zIndex: 9999 }}>{details.subtitle}</Typography>
            {hasBlobElement && <BlobElementWrapper details={details} />}
            </div>
          </Grid>
        ) :
        (
          <Grid item xs={12} md={7} paddingTop={0} className="session-title-container">
            <div className="session-inter">
              <div
                className="image-container"
                style={{
                  backgroundPosition: 'bottom center',
                  background: 'url(https://images.pexels.com/photos/583846/pexels-photo-583846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat',
                  backgroundSize: 'cover',
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
              >
                <div className="overlay"></div>
                <img
                  alt="session image"
                  style={{ zIndex: 9999, display: 'none' }}
                  src="https://i.ibb.co/P15sWK0/nenasasa.png"
                />
                <h1 className="title is-1" style={{ zIndex: 9999 }}>{details.title}</h1>
                <h4 className="subtitle is-4" style={{ zIndex: 9999 }}>{details.subtitle}</h4>
              </div>
            </div>
          </Grid>
        )}

<Grid item xs={12} md={5}>
      <Box
        marginTop={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        padding="5%"
          
      >
        <Box
          className="s-form"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="fit-content"
        sx={{ marginBottom:"1rem !important" }}
        >
          {/* Stepper fade-in */}
            <Box sx={{ width: '100%' }}>
            {feeds && currentFeed!=0  && feeds.length > 1 && !feeds[currentFeed]._is_get_interface && (
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((label, index) => (
                    <Step key={index} style={{ cursor: 'pointer' }} onClick={() => handleStepClick(index)}>
                      <StepLabel sx={{ color:'#fff', fill:"#fff" }}>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              )}
            </Box>
       

          {/* Title fade-in */}
            <Typography variant="h6" style={{ width: '100%' }} gutterBottom>
              {title}
            </Typography>
         

          {/* EList fade-in */}
          
            <Box style={{ width: '100%' }}>
              <EList
                _dialog={_dialog}
                oe={oe}
                pageGroups={pageGroups}
                currentPageGroupName={currentPageGroupName}
                submitForm={submitForm}
                getForm2={getForm2}
                sectionSize={sectionSize}
                skipForm={skipForm}
              />
            </Box>
          
        </Box>
      </Box>
    </Grid>

      </Grid>
    </form>
  );
};

export default withFormBase(SessionX);
