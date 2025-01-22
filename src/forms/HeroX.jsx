import React, { useState, useEffect, useRef } from 'react';
import './form-styles/hero-x.css'
import EList from '../Elist';
import { withFormBase } from '../FormBase';

const HeroX = ({ oe, title, onSubmit, subtitle, textAlign, details, service, pageGroups, currentPageGroupName,submitForm,skipForm,_dialog,getForm2,sectionSize }) => {
  const formRef = useRef(null);
  
  useEffect(() => {
    getForm2(formRef.current)

  });

  return (
    <section id="hero-x-wrapper form" className="section">
      <div className="module-inner">
      <EList   sectionSize={sectionSize}  oe={oe} pageGroups={pageGroups} currentPageGroupName={currentPageGroupName} submitForm={submitForm} skipForm={skipForm} _dialog={_dialog} getForm2={getForm2} />

      </div>
    </section>
  );
};


export default withFormBase(HeroX);
