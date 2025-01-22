import React, { useState, useEffect, useRef } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import ElementLoader from '../ElementLoader.jsx';
import { withFormBase } from '../FormBase.jsx';

const IFrameForm = ({ oe, title, onSubmit,subtitle,textAlign,service,pageGroups,currentPageGroupName,sectionSize }) => {
  
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);


  
  // Function to serialize the form data
  const serializeForm = (form) => {
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    return data;
  };

  // Function to validate form data
  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const formElement = formRef.current;

    // Handle form submission
    const handleFormSubmit = (event) => {
      event.preventDefault();
      if (validate()) {
        const serializedData = serializeForm(formElement);
        onSubmit(serializedData);
      }
    };

    // Add event listener to form for submit
    if (formElement) {
      formElement.addEventListener('submit', handleFormSubmit);

      return () => {
        formElement.removeEventListener('submit', handleFormSubmit);
      };
    }
  }, [formRef.current, onSubmit]);

  // Handle changes in form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle the custom submit event from LitElement button
  useEffect(() => {
    const formElement = formRef.current;

    const handleCustomSubmit = (event) => {
      const serializedData = serializeForm(formElement);
      if (validate()) {
        onSubmit(serializedData);
      }
    };

    const handleCustomEvent = (event) => {
      if (event.detail && event.detail.action === 'submit') {
        handleCustomSubmit(event);
      }
    };

    // Add event listener for custom events from LitElement
    window.addEventListener('submit-button-click', handleCustomEvent);

    return () => {
      window.removeEventListener('submit-button-click', handleCustomEvent);
    };
  }, [onSubmit]);

  return (
    <form className='form-i-frame' data-service={service} id="form" ref={formRef}>
      <Grid container spacing={0}>
      {oe && oe.map((element, index) => {
        
        let gridProps;

        if (element.__7 === "12|12|12") {
          gridProps = { xs: 12, sm: 6 }; // Full width on mobile, half width on desktop
        } else if (element.__7 === "24|24|24") {
          gridProps = { xs: 12, sm: 12 }; // Full width on all viewports
        } else {
          gridProps = { xs: 12 }; // Default to full width
        }

        return (
          <Grid item key={index} {...gridProps}>
            <div className="element-loader">
              <ElementLoader currentPageGroupName={currentPageGroupName} pageGroups={pageGroups} element={element} onChange={handleChange} />
            </div>
          </Grid>
        );
      })}
    </Grid>
     
    </form>
  );
};

export default withFormBase(IFrameForm);
