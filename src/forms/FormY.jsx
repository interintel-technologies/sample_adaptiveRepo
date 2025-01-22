import React from 'react';
import './form-styles/form-y.css'
import { withFormBase } from '../FormBase';

const FormY = ({ oe, title, onSubmit, subtitle, textAlign, details, service, pageGroups, currentPageGroupName,submitForm,skipForm,_dialog,getForm2,sectionSize }) => {

      
    return (
    <div className="card form-y-card" id="form-y-wrapper form">
      <div className="card-content">
      <EList   sectionSize={sectionSize}  oe={oe} pageGroups={pageGroups} currentPageGroupName={currentPageGroupName} submitForm={submitForm} skipForm={skipForm} _dialog={_dialog} getForm2={getForm2} />

      </div>
    </div>
  );
};



export default  withFormBase(FormY);
