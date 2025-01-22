import React, { useState, useEffect, useRef } from 'react';
import { Modal, Box, Grid, Typography, IconButton } from '@mui/material';
import ElementLoader from '../ElementLoader.jsx';
import './form-styles/section-x.css'

const SectionX = ({ oe, title, onSubmit, subtitle, textAlign, details, service, pageGroups, currentPageGroupName,sectionSize }) => {
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
    <section class="section" id='section-x-wrapper'>
    <div class="ii__container wa__container">
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
</section>
         
      
  );
};

export default SectionX;
