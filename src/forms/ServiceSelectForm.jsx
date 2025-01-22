import React from 'react';
import { Grid } from '@mui/material';
import ElementLoader from '../ElementLoader';
import './form-styles/service-select-form.css'

const ServiceSelectForm = ({ title, subtitle, oe,pageGroups, currentPageGroupName,sectionSize }) => {
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
    return (
        <section id='service-select-form-selection'>
            <h1 className='welcome-text'>{title}</h1>
            <p className='intro-text'>{subtitle}</p>
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
        </section>
    );
};


export default ServiceSelectForm;
