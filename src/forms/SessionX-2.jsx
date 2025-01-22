import React, { useEffect, useRef } from 'react';
import { Grid, Box } from '@mui/material';
import ElementLoader from '../ElementLoader.jsx'; // Placeholder for custom Element Loader
import './session-x.css'
import './form-styles/session-form-2.css'
const SessionX2 = ({ sections,pos,setPos,title, details, oe,currentPageGroupName,pageGroups , setPageSections,service,updateParentState,sectionSize }) => {
  
  const blobElementRef = useRef(null);
  const sessionFormRef = useRef(null);
  const bodyRef = useRef(null);
  const oldPosition = useRef(pos);

 

  useEffect(() => {
    if (blobElementRef.current && details) {
      blobElementRef.current.e = { details: getBlobDetails() };
    }
  }, [details]);

  const getBlobDetails = () => {
    const blob = details.blob;

    return blob !== undefined ? blob : {};
  };

  const positionTransition = (pos, oldPosition, sessionFormRef) => {
    const sessionForm = sessionFormRef.current;
  
    const triggerTransition = (direction, oppositeDirection) => {
      sessionForm.classList.add(`${direction}-out-${oppositeDirection}-in-animation`);
  
      setTimeout(() => {
        sessionForm.classList.remove(`${direction}-out-${oppositeDirection}-in-animation`);
      }, 700);
    };
  
    if (pos > oldPosition) {
      triggerTransition("right", "left");
    } else if (pos < oldPosition) {
      triggerTransition("left", "right");
    }
  };


   // Handle position changes
   positionTransition(pos, oldPosition.current, sessionFormRef);
   oldPosition.current = pos;

  const getForm = (bodyRef) => {
    return bodyRef.current;
  };

  const handleBack = (pos, setPos) => {
    setPos(pos - 1);
    notifyPosChange(pos - 1);
  };

  const shouldHideButton = (pos, steps) => {
    return pos === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const notifyPosChange = (newPos) => {
    const event = new CustomEvent('pos-change', {
      bubbles: true,
      composed: true,
      detail: { pos: newPos },
    });
    document.dispatchEvent(event);
  };

  const getLogo = (details) => {
    const { logo } = details;
    const defaultLink = "https://nenasasa.com/media/administration_gateway_logo/Nena_sasa_background__white.png";
    return logo && logo !== "" ? logo : defaultLink;
  };

  const getBgImage = (details) => {
    const { bg_image } = details;
    const defaultLink = "https://images.unsplash.com/photo-1605201100110-1f07883d2882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
    return bg_image && bg_image !== "" ? bg_image : defaultLink;
  };

  const getSubTitle2 = (details) => {
    const { logInSubtitle } = details;
    return logInSubtitle && logInSubtitle !== "" ? logInSubtitle : "";
  };


  const getSubTitle = ()=>{

    const subTitle = details.subtitle;
    if(subTitle !=undefined && subTitle !=""){

        return subTitle;
    }else{
        return "";
    }

  }

  const getTitle = (details) => {
    const { title } = details;
    return title && title !== "" ? title : "";
  };

  const _back = () => {
    // Decrement the current position
    const new_pos = pos - 1;
  
    // Update the state with the new position
    setPos(new_pos);
  
    // Notify other components about the position change
    notifyPosChange(new_pos);
  };
  

  const _hideB=(p, s)=> {
    // return false;
    return p === 0; // ||  p >= s.length-1
  }

  const computeLogo = (gateway) => {
    let defaultUrl = `https://ui-avatars.com/api/?background=FFFFFF&name=${gateway.name}`;
    
    if (gateway.iconImage) {
      defaultUrl = `/media/${gateway.iconImage}`;
    }
    
    if (gateway.logo) {
      defaultUrl = `/media/${gateway.logo}`;
    }
    
    return defaultUrl;
  };
  
  return (
    <div id="session-2-wrapper">
  <div class="limiter">
    <div class="session-container">
      <div class="wrap-session">
      <div class="session-inter">
          <div class="image-container" style={{backgroundPosition: "bottom center",background: `url(${getBgImage(details)}) no-repeat; background-size: cover; max-height: 100%; max-width: 100%;`}}>
          <div class="overlay"></div>
       
          <img src={getLogo(details)} alt="session image" style={{zIndex: "9999",display:"none"}}/>
          <h1 class="title is-1" style={{zIndex: "9999"}}>{getTitle(details)}</h1>
          <h4 class="subtitle is-4" style={{zIndex: "9999"}}>{getSubTitle(details)}</h4>
          </div>
      </div>
      <form class="session-form-2" ref={sessionFormRef}>
          <span class="session-title padd">
          <adaptive-ui-icon id="backIcon" class="nav" icon="icons:arrow-back" title="Back"
            hidden={_hideB(pos, sections)} onClick={_back()}>
          </adaptive-ui-icon>
      
          <p class="subtitle is-4">{getSubTitle2(details)}</p>
          </span>
          
          <div class="session-inputs">
          <Grid container spacing={2}>
            {oe && oe.map((element, index) => {
              let gridProps;
              if (element.__7 === "12|12|12") {
                gridProps = { xs: 12, sm: 6 };
              } else if (element.__7 === "24|24|24") {
                gridProps = { xs: 12, sm: 12 };
              } else {
                gridProps = { xs: 12 };
              }
              return (
                <Grid item key={index} {...gridProps}>
                  <ElementLoader
                    currentPageGroupName={currentPageGroupName}
                    pageGroups={pageGroups}
                    element={element}
                    onChange={handleChange}
                  />
                </Grid>
              );
            })}
          </Grid>
          </div>
      </form>
      </div>
    </div>
  </div>
    </div>
  
  );
};

export default SessionX2;