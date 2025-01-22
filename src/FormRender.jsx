import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Alert, Grid, Snackbar } from '@mui/material';
import FormX from './forms/FormX.jsx';
import SessionX from './forms/SessionX.jsx';
import StatusForm from './forms/Status.jsx';
import WindowEventForm from './forms/WindowEvent.jsx';
import LandingX from './forms/LandingX.jsx';
import IFrameForm from './forms/IFrameForm.jsx';
import AccordionX from './forms/AccordionX.jsx';
import DynamicFormX from './forms/DynamicFormX.jsx';
import PosForm from './forms/PosForm.jsx';
import LandingX2 from './forms/LandingX2.jsx';
import ContentX from './forms/ContentX.jsx';
import MessageForm from './forms/MessageForm.jsx';
import PopUpX from './forms/PopupX.jsx';
import FormY from './forms/FormY.jsx';
import HeroX from './forms/HeroX.jsx';
import SectionX from './forms/SectionX.jsx';
import SuccessForm from './forms/SuccessForm.jsx';
import SessionX2 from './forms/SessionX-2.jsx';
import InvoiceForm from './forms/InvoiceForm.jsx';
import ServiceSelectForm from './forms/ServiceSelectForm.jsx';
import LandingForm3 from './forms/LandingForm2.jsx';
import withFormRenderBase, { FORM_TYPE_FORM, FORM_TYPE_HERO_FORM, FORM_TYPE_HIDDEN_FORM, FORM_TYPE_POPUP_FORM, FORM_TYPE_SECTION_FORM, FORM_TYPE_SUCCESS_FORM } from './FormRenderBase.jsx';

const FormRender = ({ pageGroups, currentPageGroupName, feed, newFeed, setPageSections, formRef, getForm2, submitForm, _dialog, skipForm, setF }) => {

  const [feeds, setFeeds] = useState([feed]);
  const [currentFeed, setCurrentFeed] = useState(0);

  const [pos, setPos] = useState(0);
  const [loading, setLoading] = useState(true);
  const [formType, setFormType] = useState(null);
  const [formObj, setFormObj] = useState(null);
  const [formDetailsObject, setFormDetailsObject] = useState(null);
  const [oe, setOe] = useState(null);
  const [logo, setLogo] = useState(null);
  const [details, setDetails] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState(null);
  const [title, setTitle] = useState(null);
  const [service, setService] = useState(null);

  
  const [id, setID] = useState(null);
  const [icon, setIcon] = useState(null);
  const [formDefaultValue, setFormDefaultValue] = useState(null);
  const [formHeaderColor, setFormHeaderColor] = useState('');
  const [height, setHeight] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [textAlign, setTextAlign] = useState('');
  const [maxHeight, setMaxHeight] = useState('');
  const [showTelcosIcons, setShowTelcosIcons] = useState(false);
  const [sectionSize, setSectionSize] = useState(null); // Local state for page sections
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('success'); // 'success' or 'error'


  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  

  useEffect(() => {
    if (newFeed) {
     
      const feedService = newFeed.service;

      if (feed.autoSubmits===true) {
        submitForm();
      }
      else{
            
        window.addEventListener('message',(e)=>handleMessage(e,feedService));
        // Update the feeds array with the new feed
        setFeeds((prevFeeds) => [...prevFeeds, newFeed]);
        
        // Set currentFeed to the index of the newly added feed
        setCurrentFeed(feeds.length);  // This will point to the last item (new feed)
  
      }

    }
  }, [newFeed,]); 
   // This effect runs whenever `newFeed` changes

  // Define a stable handleMessage function reference here
  const handleMessage = useCallback(
    (e, feedService) => {
      // Validate the incoming message structure
      const data = e?.data;
      if (!data?.message) return;
  
      const { message } = data;
      const { status } = message;
  
      // Only proceed if status is 'PAID' and feedService is defined
      if (status === "PAID") {
        submitForm(feedService, message);
      }
    },
    [] // Dependencies can remain empty if external references are stable
  );

  useEffect(() => {
    return () => {
      window.removeEventListener("message", handleMessage());
    };
  }, [handleMessage]); // Ensure listener uses the stable handleMessage


  useEffect(() => {
    if (feeds) {

      setFormDetailsObject(feeds[currentFeed]._details);
      setFormObj(feeds[currentFeed]);
      setFormType(feeds[currentFeed]._element);
      setSectionSize(feeds[currentFeed]._sectionSize)
      setLoading(false);
      setOe(feeds[currentFeed]._oe);
      setDetails(feeds[currentFeed]._details);
      setTitle(feeds[currentFeed]._title);
      setService(feeds[currentFeed]._service);

      setID(feeds[currentFeed]._id);
      setIcon(feeds[currentFeed].icon);
      setLogo(feeds[currentFeed]._details.logo);
      setFormDefaultValue(feeds[currentFeed].sectionJson.input_var[5]);

      

      if (feeds[currentFeed] && feeds[currentFeed]._details) {
        const formDetailsObject = feeds[currentFeed]._details;

        setFormHeaderColor(formDetailsObject["background_color"] || '');
        setHeight(formDetailsObject["height"] || '');
        setSubtitle(formDetailsObject.subtitle || '');
        setTextAlign(formDetailsObject.textAlign || '');
        setMaxHeight(formDetailsObject["maxHeight"] || '');
        setShowTelcosIcons(formDetailsObject.showTelcosIcons || false);
      }
    }
  }, [feeds,currentFeed,feed]);


  useEffect(() => {
    if (feed) {
  
      // Replace the existing feeds array with the new feed
      setFeeds([feed]);
  
      // Reset the current feed index to 0
      setCurrentFeed(0);
    }
  }, [feed]); // This effect runs whenever `feed` changes
  
  const handleClose = () => {
    setModalOpen(false);
    setModalService(null);
  };

  const FORM_TYPE_FORM = "FORM";
  const FORM_TYPE_ACCORDION_FORM = "ACCORDION FORM";
  const FORM_TYPE_PAYMENTS_FORM = "PAYMENTS FORM";
  const FORM_TYPE_LANDING_FORM = "LANDING FORM";
  const FORM_TYPE_LANDING_FORM_2 = "LANDING FORM 2";
  const FORM_TYPE_SESSION_X_FORM = "SESSION X";
  const FORM_TYPE_SESSION_FORM = "SESSION FORM";
  const FORM_TYPE_SESSION_FORM_2 = "SESSION FORM 2";
  const FORM_TYPE_SECTION_FORM = "SECTION FORM";
  const FORM_TYPE_POPUP_FORM = "POPUP FORM";
  const FORM_TYPE_HERO_FORM = "HERO FORM";
  const FORM_TYPE_HIDDEN_FORM = "HIDDEN FORM";
  const FORM_TYPE_WINDOW_EVENT = "WINDOW EVENT FORM";
  const FORM_TYPE_DYNAMIC_FORM = "DYNAMIC FORM";
  const FORM_TYPE_SUCCESS_FORM = "SUCCESS FORM";
  const FORM_TYPE_INVOICE_FORM = "INVOICE FORM";
  const FORM_TYPE_FEEDBACK_FORM = "FEEDBACK FORM";
  const FORM_TYPE_SERVICE_SELECT_FORM = "SERVICE SELECT FORM";
  const FORM_MESSAGE_FORM = "MESSAGE FORM";
  const FORM_TYPE_LANDING_FORM_3 = "LANDING FORM 3";
  const FORM_TYPE_BOOKING_SETUP_FORM = "BOOKING SETUP FORM";
  const FORM_TYPE_CONTENT_FORM = "CONTENT FORM";
  const FORM_TYPE_MESSAGE_FORM = "MESSAGE FORM";
  const FORM_TYPE_STATUS_FORM = "STATUS FORM";
  const FORM_TYPE_POS_FORM = "POS FORM";
  const FORM_TYPE_IFRAME_FORM = "IFRAME FORM";


  const renderForm = () => {
    switch (formType) {
      case FORM_TYPE_FORM || FORM_TYPE_HIDDEN_FORM:
        return (
          <FormX
            formObj={formObj}
            submitForm={submitForm}
            getForm2={getForm2}
            pageGroups={pageGroups}
            currentPageGroupName={currentPageGroupName}
            oe={oe}
            title={title}
            service={service}
            formHeaderColor={formHeaderColor}
            icon={icon}
            height={height}
            subtitle={subtitle}
            textAlign={textAlign}
            maxHeight={maxHeight}
            showTelcosIcons={showTelcosIcons}
            _dialog={_dialog}
            skipForm={skipForm}
            details={formDetailsObject}
            setF={setF}
            feeds={feeds}
            currentFeed={currentFeed}
            setCurrentFeed={setCurrentFeed}
            setFeeds={setFeeds}
            sectionSize={sectionSize}
          />
        );

      case FORM_TYPE_POPUP_FORM:
        return <PopUpX 
        setF={setF} 
        skipForm={skipForm} 
        getForm2={getForm2} 
        _dialog={_dialog} 
        submitForm={submitForm} 
        pos={pos} 
        logo={logo} 
        details={formDetailsObject} 
        formObj={formObj} 
        service={service} 
        title={title} 
        type={FORM_TYPE_POPUP_FORM} 
        oe={oe}
        sectionSize={sectionSize}

        />

      case FORM_TYPE_HIDDEN_FORM:
        return <FormY 
        skipForm={skipForm} 
        getForm2={getForm2} 
        pos={pos} 
        logo={logo} 
        details={formDetailsObject} 
        formObj={formObj} 
        service={service} 
        title={title} 
        oe={oe} 
        setF={setF}
        _dialog={_dialog}
        currentPageGroupName={currentPageGroupName}
        pageGroups={pageGroups}
        submitForm={submitForm}
        sectionSize={sectionSize}

        />

      case FORM_TYPE_HERO_FORM:
        return <HeroX 
        skipForm={skipForm}
         getForm2={getForm2} 
         pos={pos} 
         logo={logo} 
         details={formDetailsObject} 
         formObj={formObj} 
         service={service} 
         title={title} 
         oe={oe} 
         setF={setF}
        _dialog={_dialog}
        currentPageGroupName={currentPageGroupName}
        pageGroups={pageGroups}
        submitForm={submitForm}
        sectionSize={sectionSize}

         />

      case FORM_TYPE_SECTION_FORM:
        return <SectionX 
        skipForm={skipForm} 
        getForm2={getForm2} 
        pos={pos} 
        logo={logo} 
        details={formDetailsObject} 
        formObj={formObj} 
        service={service} 
        title={title} 
        oe={oe} 
        setF={setF}
        _dialog={_dialog}
        currentPageGroupName={currentPageGroupName}
        pageGroups={pageGroups}
        submitForm={submitForm}
        sectionSize={sectionSize}

        />

      case FORM_TYPE_SUCCESS_FORM:
        return <SuccessForm 
        skipForm={skipForm} 
        getForm2={getForm2} 
        pos={pos} 
        logo={logo} 
        details={formDetailsObject} 
        formObj={formObj} 
        service={service} 
        title={title} 
        oe={oe}
        setF={setF}
        _dialog={_dialog}
        currentPageGroupName={currentPageGroupName}
        pageGroups={pageGroups}
        submitForm={submitForm}
        sectionSize={sectionSize}

        />

      case FORM_TYPE_SESSION_FORM:
        return <SessionX 
        skipForm={skipForm} 
        pageGroups={pageGroups} 
        currentPageGroupName={currentPageGroupName} 
        _dialog={_dialog} 
        type={FORM_TYPE_SESSION_FORM} 
        submitForm={submitForm} 
        getForm2={getForm2} 
        formRef={formRef} 
        formObj={formObj} 
        setPageSections={setPageSections} 
        service={service} t
        title={title} 
        details={formDetailsObject} 
        loading={loading} 
        oe={oe}
        setF={setF}
        feeds={feeds}
        currentFeed={currentFeed}
        setCurrentFeed={setCurrentFeed}
        setFeeds={setFeeds}
        sectionSize={sectionSize}

        />;

      case FORM_TYPE_SESSION_FORM_2:
        return <SessionX2 
        getForm2={getForm2} 
        setPos={setPos} 
        formObj={formObj} 
        setPageSections={setPageSections} 
        service={service} 
        title={title} 
        details={formDetailsObject} 
        loading={loading} 
        oe={oe} 
        id={id} 
        pageGroups={pageGroups} 
        currentPageGroupName={currentPageGroupName} 
        _dialog={_dialog}
        skipForm={skipForm}
        setF={setF}
        sectionSize={sectionSize}

        />;

      case FORM_TYPE_LANDING_FORM:
        return <LandingX 
        skipForm={skipForm} 
        getForm2={getForm2} 
        subtitle={subtitle} 
        icon={icon} 
        formObj={formObj} 
        service={service} 
        id={id} 
        pageGroups={pageGroups} 
        currentPageGroupName={currentPageGroupName} 
        title={title} 
        loading={loading} 
        oe={oe} 
        _dialog={_dialog}
        details={formDetailsObject}
        setF={setF}
        sectionSize={sectionSize}

        />;

      case FORM_TYPE_LANDING_FORM_2:
        return <LandingX2 
        title={title} 
        details={formDetailsObject} 
        submitForm={submitForm} 
        getForm2={getForm2} 
        formObj={formObj} 
        service={service} 
        id={id} 
        pageGroups={pageGroups}
        currentPageGroupName={currentPageGroupName} 
        loading={loading} 
        oe={oe} 
        _dialog={_dialog}
        skipForm={skipForm}
        setF={setF}
        sectionSize={sectionSize}

        />;

      case FORM_TYPE_IFRAME_FORM:
        return <IFrameForm 
        skipForm={skipForm} 
        getForm2={getForm2} 
        formObj={formObj} 
        service={service} 
        id={id} 
        pageGroups={pageGroups} 
        currentPageGroupName={currentPageGroupName} 
        title={title} 
        loading={loading} 
        oe={oe} 
        details={formDetailsObject}
        setF={setF}
        _dialog={_dialog}
        sectionSize={sectionSize}

        />;

      case FORM_TYPE_POS_FORM:
        return <PosForm 
        getForm2={getForm2} 
        formObj={formObj} 
        service={service} 
        id={id} 
        pageGroups={pageGroups} 
        currentPageGroupName={currentPageGroupName} 
        title={title} 
        loading={loading} 
        oe={oe} 
        _dialog={_dialog}
        skipForm={skipForm}
        details={formDetailsObject}
        setF={setF}
        sectionSize={sectionSize}

        />;

      case FORM_TYPE_ACCORDION_FORM:
        let fm = formDetailsObject;

        let link = fm["link"];
        let linkLabel = fm["linkLabel"];

        return <AccordionX 
        skipForm={skipForm} 
        getForm2={getForm2} 
        logo={logo} 
        link={link} 
        linkLabel={linkLabel} 
        formObj={formObj} 
        service={service} 
        id={id} 
        pageGroups={pageGroups} 
        currentPageGroupName={currentPageGroupName} 
        title={title} 
        loading={loading} 
        oe={oe} 
        _dialog={_dialog}
        details={formDetailsObject}
        setF={setF}
        submitForm={submitForm}
        sectionSize={sectionSize}

        />;
      case FORM_TYPE_DYNAMIC_FORM:
        let dropdownOptions = JSON.parse(formDefaultValue);
        let ops = JSON.stringify(dropdownOptions);



        return <DynamicFormX 
        skipForm={skipForm} 
        getForm2={getForm2} 
        formObj={formObj} 
        service={service} 
        id={id} 
        pageGroups={pageGroups} 
        currentPageGroupName={currentPageGroupName} 
        title={title} 
        loading={loading} 
        oe={oe} 
        dropdownOptions={ops} 
        dropdownLabel={feed._title}
          pos={pos} 
          _dialog={_dialog}
          details={formDetailsObject}
          setF={setF}
          sectionSize={sectionSize}

          />;

      case FORM_TYPE_PAYMENTS_FORM:

        return <ContentX 
        skipForm={skipForm} 
        getForm2={getForm2} 
        formObj={formObj} 
        service={service} 
        id={id} 
        pageGroups={pageGroups} 
        currentPageGroupName={currentPageGroupName} 
        title={title} 
        loading={loading} 
        oe={oe} 
        details={formDetailsObject} 
        headerBgColor={formHeaderColor}
          pos={pos} icon={icon} 
          height={height} 
          maxHeight={maxHeight} 
          _dialog={_dialog}
          setF={setF}
          sectionSize={sectionSize}

          />;

      case FORM_TYPE_FEEDBACK_FORM:

        const image = formDetailsObject.image;

        return <ContentX 
        skipForm={skipForm} 
        getForm2={getForm2} 
        image={image} 
        formObj={formObj} 
        service={service} 
        id={id} 
        pageGroups={pageGroups} 
        currentPageGroupName={currentPageGroupName} 
        title={title} 
        loading={loading} 
        oe={oe} 
        details={formDetailsObject} 
        headerBgColor={formHeaderColor}
        pos={pos} icon={icon} 
        height={height} 
        maxHeight={maxHeight}
        _dialog={_dialog}
        setF={setF}
        sectionSize={sectionSize}

        />;


      case FORM_TYPE_STATUS_FORM:
        return <StatusForm 
        skipForm={skipForm} 
        getForm2={getForm2} 
        formObj={formObj} 
        service={service} 
        type={details?.type} 
        subtitle={subtitle} 
        _dialog={_dialog}
        details={formDetailsObject}
        setF={setF}
        sectionSize={sectionSize}

        />;
      case FORM_TYPE_MESSAGE_FORM:
        return <MessageForm 
        skipForm={skipForm} 
        formObj={formObj} 
        service={service} 
        type={details?.type} 
        subtitle={subtitle} 
        _dialog={_dialog}
        details={formDetailsObject}
        setF={setF}
        sectionSize={sectionSize}

        />;

      case FORM_TYPE_WINDOW_EVENT:
        let formTitleColor = formDetailsObject["color"];

        return (
          <>
            <p
              slot="header"
              className="card-header-title"
              style={{ color: `${formTitleColor} !important` }}
            >
              {feed._title}
            </p>
            <WindowEventForm
              skipForm={skipForm}
              getForm2={getForm2}
              pos={pos}
              logo={logo}
              details={formDetailsObject}
              formObj={formObj}
              service={service}
              _dialog={_dialog}
              sectionSize={sectionSize}

            />
          </>
        );


      case FORM_TYPE_INVOICE_FORM:
        return (
          <>
            <InvoiceForm 
            skipForm={skipForm} 
            getForm2={getForm2} 
            pos={pos} logo={logo} 
            details={formDetailsObject} 
            formObj={formObj} 
            service={service} 
            _dialog={_dialog}
            setF={setF}
            sectionSize={sectionSize}

            />
          </>

        );

      case FORM_TYPE_SERVICE_SELECT_FORM:
        return <ServiceSelectForm 
        skipForm={skipForm} 
        getForm2={getForm2} 
        title={title} 
        subtitle={subtitle} 
        pos={pos} 
        logo={logo} 
        details={formDetailsObject} 
        formObj={formObj} 
        service={service} 
        _dialog={_dialog}
        setF={setF}
        sectionSize={sectionSize}

        />

      case FORM_TYPE_LANDING_FORM_3:
        return <LandingForm3 
        skipForm={skipForm} 
        getForm2={getForm2} 
        title={title} 
        subtitle={subtitle} 
        pos={pos} 
        logo={logo} 
        details={formDetailsObject} 
        formObj={formObj} 
        service={service} 
        _dialog={_dialog}
        setF={setF}
        sectionSize={sectionSize}

        />





      default:
        return <Alert severity="error">No form available for this type {formType}</Alert>

    }
  };

  let gridProps;

  if (sectionSize === "12|12|12") {
    gridProps = { xs: 12, sm: 6 }; // Full width on mobile, half width on desktop
  } else if (sectionSize === "24|24|24") {
    gridProps = { xs: 12, sm: 12 }; // Full width on all viewports
  } else if (sectionSize === "6|6|6") {
    gridProps = { xs: 12, sm: 3 }; // Full width on mobile, quarter width on desktop
  } else {
    gridProps = { xs: 12 }; // Default to full width
  }

  return (
    <div>
      {loading ? <div></div> :
      
      <Grid container spacing={2}>
      <Grid item  {...gridProps}>
        <div className="element-loader">
          {renderForm()}
        </div>
      </Grid>
    </Grid>


     }
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarType}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      {/* Render the modal here */}
      {modalOpen && (
        <ModalComponen
          open={modalOpen}
          onClose={handleClose}
          content={<FormX formObj={formObj} />}
        />
      )}
    </div>
  );
};

export default withFormRenderBase(FormRender);