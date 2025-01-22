import React, { useState, useEffect, useRef } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import ElementLoader from '../ElementLoader.jsx';
import './form-styles/message-form.css'
import EList from '../Elist.jsx';

const MessageForm = ({ oe, title, onSubmit,subtitle,textAlign,service,pageGroups,currentPageGroupName,sectionSize }) => {
  
  return (

    <form className='form-message' data-service={service} id="form-message-wrapper form" ref={formRef}>
    <div className="content">
      <div className="column">
        <div className="card">
          <div className="card-content hero-body">
            <div className="is-flex">
              <adaptive-ui-icon icon="${this.icon}"></adaptive-ui-icon>
              <h3>{title}</h3>
            </div>
            <div className="columns">
              <div className={`column is-${tips.length > 0 ? '9' : '12'}`}>
                {subtitle && (
                  <div className="card-header">
                    <h5 className="card-header-title">{subtitle}</h5>
                  </div>
                )}
               <EList
                _dialog={_dialog}
                oe={oe}
                pageGroups={pageGroups}
                currentPageGroupName={currentPageGroupName}
                submitForm={submitForm}
                getForm2={getForm2}
                sectionSize={sectionSize}
              />
              </div>
              {tips.length > 0 && (
                <div className="column is-3">
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">Tips</p>
                    </div>
                    <div className="card-content">
                      {tips.map((tip, index) => (
                        <div key={index} className="tip is-flex">
                          <adaptive-ui-icon icon="hardware:keyboard-arrow-right"></adaptive-ui-icon>
                          <p className="card-content-text">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  );
};

export default MessageForm;
