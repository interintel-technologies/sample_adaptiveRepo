import React, { useState, useEffect, useRef } from 'react';
import { Modal, Box, Grid, Typography, IconButton } from '@mui/material';
import ElementLoader from '../ElementLoader.jsx';

const SuccessForm = ({ oe, title, onSubmit, subtitle, textAlign, details, service, pageGroups, currentPageGroupName }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 const getForm = ()=> {
    return document.querySelector('.ii__container.wa__container')
      .assignedNodes()[0];
  }

  return (
<div class="card success-form-container">
                <div class="columns">
                    <div class="column is-4 is-flex left">
                        <slot name="title" style={{alignSelf:"center"}}></slot>
                    </div>
                    <div class="column is-4 is-flex center">
                        <adaptive-ui-icon datacolor={"#43A047"} style={{width: "120px",height: "120px",fill:"#43A047"}} icon={'icons:MdCheck'}></adaptive-ui-icon>       
                        <h4 class="title is-4">{title}</h4>
                        <p class="subtitle is-5">{subtitle}</p>
                    </div>
                    <div class="column is-4 is-flex ">
                    </div>
                </div>
                <div class="card-content">
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
            </div>
  );
};

export default SuccessForm 
