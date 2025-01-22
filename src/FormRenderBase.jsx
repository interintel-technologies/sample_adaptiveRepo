import React, { useState, useCallback } from 'react';
import { Logger } from './core/logger';
import { SerializableElement, Validation } from './core/serializable-element';
import {  callAxios, callServiceParams } from './core/mixins/http-mixin';
import { COMMAND_WINDOW_EVENT } from './core/parsers/response';
import { GetSection } from './core/parsers/commands/get-section';
import { Alert, Backdrop, Box,  CircularProgress,  Snackbar, Typography,IconButton, Grid  } from '@mui/material';

import { interfaceSelector, sectionSelector } from './core/mixins/adaptiveui-mixin';
import FormRender from './FormRender';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import {useTheme} from '@mui/material';

export const FORM_TYPE_FORM = "FORM";
export const FORM_TYPE_ACCORDION_FORM = "ACCORDION FORM";
export const FORM_TYPE_PAYMENTS_FORM = "PAYMENTS FORM";
export const FORM_TYPE_LANDING_FORM = "LANDING FORM";
export const FORM_TYPE_LANDING_FORM_2 = "LANDING FORM 2";
export const FORM_TYPE_SESSION_X_FORM = "SESSION X";
export const FORM_TYPE_SESSION_FORM = "SESSION FORM";
export const FORM_TYPE_SESSION_FORM_2 = "SESSION FORM 2";
export const FORM_TYPE_SECTION_FORM = "SECTION FORM";
export const FORM_TYPE_POPUP_FORM = "POPUP FORM";
export const FORM_TYPE_HERO_FORM = "HERO FORM";
export const FORM_TYPE_HIDDEN_FORM = "HIDDEN FORM";
export const FORM_TYPE_WINDOW_EVENT = "WINDOW EVENT FORM";
export const FORM_TYPE_DYNAMIC_FORM = "DYNAMIC FORM";
export const FORM_TYPE_SUCCESS_FORM = "SUCCESS FORM";
export const FORM_TYPE_INVOICE_FORM = "INVOICE FORM";
export const FORM_TYPE_FEEDBACK_FORM = "FEEDBACK FORM";
export const FORM_TYPE_SERVICE_SELECT_FORM = "SERVICE SELECT FORM";
export const FORM_MESSAGE_FORM = "MESSAGE FORM";
export const FORM_TYPE_LANDING_FORM_3 = "LANDING FORM 3";
export const FORM_TYPE_BOOKING_SETUP_FORM = "BOOKING SETUP FORM";
export const FORM_TYPE_CONTENT_FORM = "CONTENT FORM";
export const FORM_TYPE_MESSAGE_FORM = "MESSAGE FORM";
export const FORM_TYPE_STATUS_FORM = "STATUS FORM";
export const FORM_TYPE_POS_FORM = "POS FORM";
export const FORM_TYPE_IFRAME_FORM="IFRAME FORM";
export const RENDER_M_DEFAULT = 0;


const COMMAND_CHECK_PAYMENT_WINDOW_PAYLOAD = 'check_payment_window_payload';

const withFormRenderBase = (WrappedComponent) => {
  return (props) => {

    // useImperativeHandle(ref, () => ({
    //   getFormElement: () => formRef.current,
    // }));

 // Define state hooks for each property
 const [params, setParams] = useState({});
 const [stepParams, setStepParams] = useState({});
 const [feed, setFeed] = useState({});
 const [activeFeed, setActiveFeed] = useState(null); // Assuming PageInputGroup is a complex object or class
 const [pos, setPos] = useState(0);
 const [bind, setBind] = useState(0);
 const [sections, setSections] = useState([]);
 const [renderMode, setRenderMode] = useState(RENDER_M_DEFAULT);
 const [loadingsubmissions, setLoadingsubmissions] = useState(false);
 const [f,setF] = useState(null)
 const [isModalOpen, setIsModalOpen] = useState(false); // State for Modal visibility
 const [triggerRender, setTriggerRender] = useState(false);
 const [snackbarOpen, setSnackbarOpen] = useState(false);
 const [snackbarMessage, setSnackbarMessage] = useState('');
 const [snackbarType, setSnackbarType] = useState('success'); // 'success' or 'error'
 const [newFeed,setNewFeed]= useState()
 const [modalPageSections,setModalPageSections]= useState()

 const handleSnackbarClose = () => {
  setSnackbarOpen(false);
};
 
    // Combine the formRef from withFormBase
    const getForm2 = (form) => {
      
      if(form){
        setF(form)
      }
      
      return "form"
      
    };



const handleOpenModal = () => {
  setIsModalOpen(true)
  setTriggerRender(!triggerRender)

};
const handleCloseModal = () => setIsModalOpen(false);

// Function to update feed state
const updateFeed = (newFeed) => {
  setFeed(newFeed);
};


const feedChange = ()=> {
  const feed = __computeActiveFeed();

  if (feed.autoSubmits) {
    submitForm();
  }
}

const paramsCopy=()=> {
  return mergeParams(stepParams, params);
}

const activeFeedOe=(a, pos)=> {
  const af = __computeActiveFeed();

  return af.oe;
}


const _onPosChange=(evt)=> {
  setPos(evt.detail["pos"]);
}

const __computeActiveFeed = ()=> {
  
  if (sections.length) {
    return sections[pos];
  }

}

const mergeParams=(obj1, obj2)=> {

  
  // todo update to use Object.assign
  // todo obj1 and obj2 should never be null

  const obj3 = {};
  if (obj1) {
    for (var attrname in obj2) {
      obj3[attrname] = obj2[attrname];
    }
  }
  if (obj2) {
    for (var attrname in obj1) {
      obj3[attrname] = obj1[attrname];
    }
  }
  return obj3;
}


const _dialog= async (...args)=> {
  
  setLoadingsubmissions(true)
  // Destructuring assignment of service and params
  if (args[0] instanceof GetSection) {

    if (!args[1]) {
      Logger.i.warn(`[DEPRECATED API USAGE] 
        Whatever called this should update to include the get_section service and params`);
    } else {
      // ({service, params}  = args[1]);
    }
  } else {
    args[1] = mergeParams(args[1], stepParams);

  }


  if (!window.NO_NETWORKING) {
    // Online mode - perform API call
    try {
      const { response } = await callAxios(args[0], args[1]);
      const { response_status } = response;
      if (response) {
      if (response_status === "00") {
        const storedParams = JSON.parse(sessionStorage.getItem('stepParams')) || {};
  
        // Update stepParams by merging storedParams and formData
        const mergedParams = { ...storedParams, ...args[1]};
      
        // Save the updated params to sessionStorage
        sessionStorage.setItem('stepParams', JSON.stringify(mergedParams));
      
        // Set the mergedParams in the state
        setStepParams(mergedParams);
    
        setLoadingsubmissions(false)
        handleResponse(response,"DIALOG");
      } else {
        setLoadingsubmissions(false)
        setSnackbarMessage('Form submission failed.');
        setSnackbarType('error');
        setSnackbarOpen(true);
      }
    }
      else{
        setLoadingsubmissions(false);
        setSnackbarMessage("400 Bad Request");
        setSnackbarType('error');
        setSnackbarOpen(true);
      }
  
    } catch (error) {
      console.error("API call failed: ", error);
    }
  } else {
    // Offline mode - use window.SECTION_SERVICE_PAYLOAD
    console.warn("Offline mode, using SECTION_SERVICE_PAYLOAD.");
    const storedParams = JSON.parse(sessionStorage.getItem('stepParams')) || {};
  
    // Update stepParams by merging storedParams and formData
    const mergedParams = { ...storedParams, ...args[1] };
  // Save the updated params to sessionStorage
  sessionStorage.setItem('stepParams', JSON.stringify(mergedParams));
      
  // Set the mergedParams in the state
  setStepParams(mergedParams);

    setLoadingsubmissions(false)
    handleResponse(window.SECTION_SERVICE_PAYLOAD,"DIALOG");
  }
  
}


const handleResponse = (response,initiator) => {

  if (response.response[`get_section`]) {
    const sectionPayload = response;


    const section = sectionSelector(sectionPayload);

    const _computeFeed = (getSection) => {
      var pageGroup = getSection._pageGroups[0];
      return pageGroup;
    };

    const active_feed = _computeFeed(section);
    const pageSections = active_feed._tabs;
    if(initiator == "DIALOG"){
      
      setModalPageSections(pageSections);
      handleOpenModal();
      setSnackbarMessage('Opening Dialog');
      setSnackbarType('success');
      setSnackbarOpen(true);
    }
    if(initiator == "DEFAULT"){
      setLoadingsubmissions(false);
      setNewFeed(pageSections[0]._feedList[0])
      setSnackbarMessage('Successful');
      setSnackbarType('success');
      setSnackbarOpen(true);
    }
    if(initiator == "SKIPFORM"){
      setLoadingsubmissions(false);
      setNewFeed(pageSections[0]._feedList[0])
      setSnackbarMessage('Skipping');
      setSnackbarType('success');
      setSnackbarOpen(true);
    }
  } 
  else if(response.response[`get_interface`]){
    
    const interfacePayload = response;
    
    const interfaceX = interfaceSelector(interfacePayload);

    const _computeFeed = (getInterface) => {
      var pageGroup = getInterface._pageGroups[0];
      return pageGroup;
    };

    

    const active_feed = _computeFeed(interfaceX);
    const pageSections = active_feed._tabs;
    


    if(initiator == "DIALOG"){
      setModalPageSections(pageSections);
      handleOpenModal();
      setSnackbarMessage('Opening Dialog');
      setSnackbarType('success');
      setSnackbarOpen(true);
    }
    if(initiator == "DEFAULT"){
      setLoadingsubmissions(false);
      setNewFeed(pageSections[0]._feedList[0]);
      setSnackbarMessage('Successful');
      setSnackbarType('success');
      setSnackbarOpen(true);
    }
    if(initiator == "SKIPFORM"){
      setLoadingsubmissions(false);
      setNewFeed(pageSections[0]._feedList[0]);
      setSnackbarMessage('Skipping');
      setSnackbarType('success');
      setSnackbarOpen(true);

    }


  } 

};

  
  const _findElements = () => {

    
    const formElement = f;
    const foundElements = [];
    
    if (formElement) {
      const nodes = formElement.querySelectorAll('.element-loader');

      // Helper function to check if a node has a specific property
      const hasSpecificProperty = (node, propertyName) => {
        return node[propertyName] !== undefined;
      };

      // Recursive function to dig through child nodes
      const findSpecificProperty = (childNode) => {

        if (childNode.shadowRoot) {
          foundElements.push(childNode);
          // setSubmittable(prevState => [...prevState, childNode]);
        }

        // Loop through and process each child node recursively
        childNode.childNodes.forEach((nestedChild) => {
         

          // Continue searching in deeper levels
          findSpecificProperty(nestedChild);
        });
      };

      nodes.forEach((node) => {
        // Start digging from the current node
        node.childNodes.forEach((childNode) => {
          findSpecificProperty(childNode);
        });
      });
    } 
    
    return foundElements;
  };

  const _validate = () => {
    
    const elements = _findElements();

    for (let i = 0; i < elements.length; i++) {
      const l = elements[i];
    
      
      if (l instanceof SerializableElement) {

        try {
          const validation = l.validate();
    
          if (validation instanceof Validation) {

            if (!validation.isValid) {
              
              // prefer elements invalid() implementation
              // over general class addition to loader
              try {
                l.invalid(validation);
              } catch (e) {
                Logger.i.error(e);
                l.classList.add('invalid-e-l');
              }
              // Logger.i.error(loader, l);
              l.scrollIntoView({behavior: 'smooth', block: 'end'});
              return false;
            } else {
              try {
                return true

                // l.valid(validation);
              } catch (e) {
                
                Logger.i.error(e);
                l.classList.remove('invalid-e-l');
              }
            }
          } else {
            Logger.i.alert(`[.validate] must return Validation - ${l.e.name} `);
          }
        } catch (e) {
          Logger.i.error(e);
          Logger.i.alert(e);
        }
      }
    }
  };

  const _addSerializedElement = (json, name, value) => {
    // If the name doesn't exist, add it. Otherw it to
    // an array,
    if (json[name] === undefined) {
      json[name] = value;
    } else {
      if (!Array.isArray(json[name])) {
        json[name] = [json[name]];
      }
      json[name].push(value);
    }
  }
  const _serialize  = async()=> {
    // Only elements that have a `name` and are not disabled are submittable.
    var elements = _findElements();
    var json = {};
    for (var i = 0; i < elements.length; i++) {
      const l = elements[i];
     
      // todo #204
      // implement a method SerializableElement.isSerializable()
      // can be used to override is Serializable status
      // i.e datalist being Serializable is set from details['selectable']
      if (l instanceof SerializableElement) {
        await Promise.resolve(l.getValue()).then(value => {
          // If value is an object, iterate the key value pairs
          if (!Array.isArray([value]) && typeof value === 'object') {
            // `value === null` should never happen
            Object.entries(value).forEach(([name, value]) => {
              _addSerializedElement(json, name, value);
            });
          } else {
            _addSerializedElement(json, l.getName(), value);
          }
        });
      }
    }
    return json;
  }

  const submitForm = async (feedService,params) => {
 
    if (loadingsubmissions) {
      return;
    }
    
    setLoadingsubmissions(true);
  
    let formValid,formData,storedParams;
    formValid = _validate();

    // Check if formValid is undefined
    if (formValid === undefined) {  
      // Parse the value of 'stepParams' from sessionStorage and assign it to formValid
      const data = JSON.parse(sessionStorage.getItem('stepParams'));
      const formData= { ...data, ...params };
 
    }
    else if(!formValid){
      setLoadingsubmissions(false);
      setSnackbarMessage("Please fill in required fields");
      setSnackbarType('error');
      setSnackbarOpen(true);
      return
    }
    else{
      formData = await _serialize();
    }

    // Serialize the form data
    storedParams = JSON.parse(sessionStorage.getItem('stepParams')) || {};
  
    // Update stepParams by merging storedParams and formData
    const mergedParams = { ...storedParams, ...formData };
  
    if(feedService){
      Object.assign(mergedParams, params);
    }
    // Save the updated params to sessionStorage  
    sessionStorage.setItem('stepParams', JSON.stringify(mergedParams));
  
    // Set the mergedParams in the state
    setStepParams(mergedParams);
  
    // Compute feed and form type
    const af = __computeActiveFeed();
    let service='';
    let formType='';
    if(f){
       service = f.getAttribute('data-service');

       formType = f.getAttribute('form-type');
    }

    // Handle different form types
    if (formType === FORM_TYPE_WINDOW_EVENT || formType === FORM_TYPE_INVOICE_FORM) {
      window.addEventListener("message", ev => {
        if (ev.data.message === "deliverResult") {
          ev.source.close();
          setLoadingsubmissions(false);
        }
      });
  
      let endpoint = af.inputVarAt(5) + "?";
      let endpointCallback = af.inputVarAt(5);
  
      const paramsString = Object.keys(formData).map(k => {
        return encodeURIComponent(k) + "=" + encodeURIComponent(mergedParams[k]);
      }).join("&");
  
      endpoint += paramsString;
    
      const detailsHeight = af.inputVarAt(14)["height"];
      const detailsWidth = af.inputVarAt(14)["width"];
      const closeWindowService = af.inputVarAt(11);
      const h = detailsHeight || 600;
      const w = detailsWidth || 900;
  
      const left = window.screen.width / 2 - (w / 2 + 10);
      const top = window.screen.height / 2 - (h / 2 + 50);
      const child = window.open(
        endpoint,
        "_blank",
        `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`
      );
  
      const interval = setInterval(() => {
        child.postMessage({ message: "requestResult" }, endpointCallback);
  
        if (child.closed) {
          console.info("Window closed. Running windowCloseService");
          loadingsubmissions ? (loadingsubmissions = false) : console.log("Window still processing");
          clearInterval(interval);
          if (closeWindowService) {
            runCloseWindowService(closeWindowService);
          }
        }
      }, 500);
  
    } else {
      // Handle other form types
      if (formType === FORM_TYPE_POPUP_FORM) {
        setTimeout(() => {
          closePopUpForm();
        }, 3000);
      }

      
      // Handle network submissions if online
      if (!window.NO_NETWORKING) {
        try {
       
          const serviceToUse= service || feedService;
      
          const {response} = await callAxios(serviceToUse, mergedParams);
         
          if (response) {
           
            setLoadingsubmissions(false);  
          const { response_status } = response;
  
          if (response_status === "00") {
            setLoadingsubmissions(false)
            handleResponse(response,"DEFAULT");
          } else {
            setSnackbarMessage(response.last_response || "");
            setSnackbarType('error');
            setSnackbarOpen(true);
          }
          }
          else{
            setLoadingsubmissions(false);
            setSnackbarMessage("400 Bad Request");
            setSnackbarType('error');
            setSnackbarOpen(true);
          }
  
          
        } catch (error) {
          console.error("API call failed: ", error);
        }
      } else {
        handleResponse(window.SECTION_SERVICE_PAYLOAD,"DEFAULT");

      }
    }
  };
  
  

    const submitForm2 = async(service) => {
      if (loadingsubmissions) {
        return;
      }
      setLoadingsubmissions(true);

      const formValid = _validate();
      if (!formValid) {
        setLoadingsubmissions(false);
        return;
      }

      const formData = await _serialize();
      const updatedParams = mergeParams(formData, stepParams);

      const storedParams = JSON.parse(sessionStorage.getItem('stepParams')) || {};
  
      // Update stepParams by merging storedParams and formData
      const mergedParams = { ...storedParams, ...formData };
    
      // Save the updated params to sessionStorage
      sessionStorage.setItem('stepParams', JSON.stringify(mergedParams));
    
      // Set the mergedParams in the state
      setStepParams(mergedParams);

      const af = __computeActiveFeed();
      const formType = f.getAttribute('form-type');

      if (formType === FORM_TYPE_WINDOW_EVENT) {
        const endpoint = af.inputVarAt(5) + "?";
        const endpointCallback = af.inputVarAt(5);

        const paramsString = Object.keys(formData).map(k => 
          `${encodeURIComponent(k)}=${encodeURIComponent(updatedParams[k])}`
        ).join("&");
        const fullEndpoint = endpoint + paramsString;

        const h = af.inputVarAt(14)?.height || 600;
        const w = af.inputVarAt(14)?.width || 900;
        const left = window.screen.width / 2 - (w / 2 + 10);
        const top = window.screen.height / 2 - (h / 2 + 50);

        const child = window.open(
          fullEndpoint,
          "_blank",
          `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`
        );

        const interval = setInterval(() => {
          child.postMessage({ message: "requestResult" }, endpointCallback);

          if (child.closed) {
            setLoadingsubmissions(false);
            clearInterval(interval);
            if (af.inputVarAt(11)) {
              runCloseWindowService(af.inputVarAt(11));
            }
          }
        }, 500);

      } else {
        if (formType === FORM_TYPE_POPUP_FORM) {
          setTimeout(() => {
            closePopUpForm();
          }, 3000);
        }

        try {
         
           const response = await callServiceParams(service, updatedParams);
          

          setLoadingsubmissions(false);

          if (response.containsServiceCommand(COMMAND_WINDOW_EVENT)) {
            if (window.Android) {
              Android.onWindowEvent(response.stringify());
            } else {
              const interval = setInterval(() => {
                window.addEventListener("message", ev => {
                  if (ev.data.message === "requestResult") {
                    const origin = ev.origin || ev.originalEvent.origin;
                    ev.source.postMessage({ message: "deliverResult", success: true, payload: response }, origin);
                    clearInterval(interval);
                  }
                });
              }, 500);
            }
          }

          if (response.containsServiceCommand(COMMAND_CHECK_PAYMENT_WINDOW_PAYLOAD)) {
            if (window.Android) {
              Android.onWindowEvent(response.stringify());
            } else {
              const interval = setInterval(() => {
                window.addEventListener("message", ev => {
                  if (ev.data.message === "requestResult") {
                    const origin = ev.origin || ev.originalEvent.origin;
                    ev.source.postMessage({ message: "deliverResult", success: true, payload: response }, origin);
                    clearInterval(interval);
                  }
                });
              }, 500);
            }
          }

          // handleResponse(response);
        } catch (error) {
          console.error(error);
          setLoadingsubmissions(false);
        }
      }
    }

    const skipForm =  async (service, name, value) => {
     
      if (loadingsubmissions) {
        return;
      }
      setLoadingsubmissions(true);

      const skipFormParams = { ...stepParams, [name]: value };
      const af = __computeActiveFeed();
  
      const formType = f.getAttribute('form-type');

      if (formType === FORM_TYPE_POPUP_FORM) {
        setTimeout(() => {
          closePopUpForm();
        }, 3000);
      }

      if (!window.NO_NETWORKING) {
      try {
        const {response} = await callAxios(service, skipFormParams);
        if (response) {
          setLoadingsubmissions(false);

          const { response_status } = response;
  
        if (response_status === "00") {
          setLoadingsubmissions(false)
          handleResponse(response,"DEFAULT");
          setSnackbarMessage(response.last_response || "Successful");
          setSnackbarType('success');
          setSnackbarOpen(true);

        } else {
          setSnackbarMessage(response.last_response || "");
          setSnackbarType('error');
          setSnackbarOpen(true);
        }
        }
        else{
          setLoadingsubmissions(false);
          setSnackbarMessage("400 Bad Request");
          setSnackbarType('error');
          setSnackbarOpen(true);
        }


        


        // handleResponse(response);
      } catch (error) {
        console.error(error);
        setLoadingsubmissions(false);
      }
    } else {
      // Offline mode - use window.SECTION_SERVICE_PAYLOAD
      setLoadingsubmissions(false)
      handleResponse(window.SECTION_SERVICE_PAYLOAD,"SKIPFORM");
    }
    }

    const runCloseWindowService = useCallback(async (service) => {
      if (loadingsubmissions) {
        return;
      }
      setLoadingsubmissions(true);

      const skipFormParams = stepParams;

      const af = __computeActiveFeed();
      const formType = af.formType();

      if (formType === FORM_TYPE_POPUP_FORM) {
        setTimeout(() => {
          closePopUpForm();
        }, 3000);
      }

      try {
        const response = await callServiceParams(service, skipFormParams);
        setLoadingsubmissions(false);

        if (response.containsServiceCommand(COMMAND_WINDOW_EVENT)) {
          if (window.Android) {
            Android.onWindowEvent(response.stringify());
          } else {
            const interval = setInterval(() => {
              window.addEventListener("message", ev => {
                if (ev.data.message === "requestResult") {
                  const origin = ev.origin || ev.originalEvent.origin;
                  ev.source.postMessage({ message: "deliverResult", success: true, payload: response }, origin);
                  clearInterval(interval);
                }
              });
            }, 500);
          }
        }

        // handleResponse(response);
      } catch (error) {
        console.error(error);
        setLoadingsubmissions(false);
      }
    }, [loadingsubmissions, stepParams]);

    const closeWindow = () => {
      window.close();
    };

    const submitDynamicForm = useCallback(async (event) => {
      const dynamicFormService = event.detail["selectedOption"];
      const dynamicFormParams = stepParams;

      if (loadingsubmissions) {
        console.warn("A Submit is already in processing");
        return;
      }
      setLoadingsubmissions(true);

      const af = __computeActiveFeed();
      const formType = af.formType();

      if (formType === FORM_TYPE_POPUP_FORM) {
        setTimeout(() => {
          closePopUpForm();
        }, 3000);
      }

      try {
        const response = await callServiceParams(dynamicFormService, dynamicFormParams);
        setLoadingsubmissions(false);

        if (response.containsServiceCommand(COMMAND_WINDOW_EVENT)) {
          if (window.Android) {
            Android.onWindowEvent(response.stringify());
          } else {
            const interval = setInterval(() => {
              window.addEventListener("message", ev => {
                if (ev.data.message === "requestResult") {
                  const origin = ev.origin || ev.originalEvent.origin;
                  ev.source.postMessage({ message: "deliverResult", success: true, payload: response }, origin);
                  clearInterval(interval);
                }
              });
            }, 500);
          }
        }

        // handleResponse(response);
      } catch (error) {
        console.error(error);
        setLoadingsubmissions(false);
      }
    }, [loadingsubmissions, stepParams]);

    const closePopUpForm = () => {
      const popUpContainer = document.querySelector("form-render").shadowRoot.querySelector("popup-x");
      popUpContainer.style.display = "none";
    };
    
    return (
      <>

<Backdrop
      sx={{ color: 'var(--primary)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loadingsubmissions}
    >
      <CircularProgress color="inherit" />
    </Backdrop>

<Snackbar
        open={snackbarOpen}
        autoHideDuration={4000} 
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarType}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

<WrappedComponent
        {...props}
        submitForm={submitForm}
        submitForm2={submitForm2}
        skipForm={skipForm}
        runCloseWindowService={runCloseWindowService}
        closeWindow={closeWindow}
        submitDynamicForm={submitDynamicForm}
        closePopUpForm={closePopUpForm}
        loadingsubmissions={loadingsubmissions}
        getForm2={getForm2}
        _dialog={_dialog}
        newFeed={newFeed}
        setF={setF}
        
      />

      {isModalOpen && 
     <CustomModal modalPageSections={modalPageSections} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      }

        
      </>
     
    );
  };
};



const CustomModal = ({ modalPageSections, isModalOpen, setIsModalOpen }) => {
  
  const title_head = modalPageSections._title
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const theme=useTheme();

  const hexToRgbA=(hex)=>{
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',.15)';
    }
    throw new Error('Bad Hex');
}
 
  return (
    
    <Box
    open={isModalOpen}
    onClose={handleCloseModal}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
    sx={{ position: 'relative' }}
  >
    <Fade in={isModalOpen}>
      <Box
        style={{backgroundColor: hexToRgbA(theme.palette.primary.main)}}
        sx={{
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          backdropFilter: 'blur(5px)', // Blur effect
          zIndex: 1200 // Ensure it's behind the modal
        }}
      >
      <Box
      className="modal-box"
  style={{ backgroundColor: 'var(--md-sys-color-surfaceContainerLowest)' }}
  sx={{
    position: 'relative',
    width: '70%',
    maxWidth: '70vw',
    margin: 'auto',
    marginTop: '4%',
    padding: '1rem 2.5rem 3rem 2.5rem',
    borderRadius: "8px",
    maxHeight: '80vh',
    height:'80vh',
    boxShadow: 3,
    zIndex: 1300,
    display: 'flex',
    flexDirection: 'column',
  }}
>
  {/* Header Section (20% of height) */}
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    sx={{ flexBasis: '20%', flexShrink: 0,color:"var(--primary)" }}
  >
    <Typography  id="modal-title" variant="h6" component="h2">
      {title_head}
    </Typography>
    <IconButton sx={{ padding:'14px', transform:'scale(.85)', boxShadow:'none',backgroundColor:'var(--md-sys-color-surfaceContainerLow)' }} onClick={handleCloseModal}>
      <CloseIcon />
    </IconButton>
  </Box>

  {/* Modal Description Section (80% of height) */}
  <Box
    id="modal-description"
    sx={{ flexBasis: '80%', flexGrow: 1, overflowY: 'hidden' }} // Ensure the description section is scrollable
  >
    {modalPageSections && modalPageSections.map((pageSection, indexSection) => (
      <section
        style={{ background: "var(--md-sys-color-surfaceContainerLowest)" }}
        id={pageSection._title.toLowerCase()}
        key={indexSection}
      >
        <Grid container spacing={2}>
        {pageSection._feedList && pageSection._feedList.map((feed, indexFeed) => (
          <Grid
            item
            xs={12}
            sm={pageSection._feedList.length === 1 ? 12 : 6} // Full width if only one feed, otherwise half width
            md={pageSection._feedList.length === 1 ? 12 : 6} // Full width if only one feed, otherwise half width
            key={indexFeed}
            id={"grid-"+indexFeed}
          >
            <Box
              sx={{
                maxHeight: 'calc(80vh - 60px)', // Adjust the height as needed
                overflowY: 'auto',
              }}
            >
              <FormRender
              view=""
                pageGroups={modalPageSections}
                feed={feed}
                currentPageGroupName={pageSection._title.toLowerCase()}
                setPageSections={() => {}}
                style={window.NEWSECTIONSIZE ? { minHeight: `${feed._height}px` } : {}}

              />
            </Box>
          </Grid>
))}

        </Grid>
      </section>
    ))}
  </Box>
</Box>

      </Box>
    </Fade>
  </Box>

  );
};

export default withFormRenderBase;