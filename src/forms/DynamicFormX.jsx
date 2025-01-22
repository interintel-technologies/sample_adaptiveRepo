import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import ElementLoader from '../ElementLoader';
import { Grid } from '@mui/material';
import './form-styles/dynamic-form-x.css'
import { withFormBase } from '../FormBase';

const DynamicFormX = ({
  title,
  details,
  loading,
  sections,
  dropdownLabel,
  dropdownOptions,
  onSubmitDynamicForm,
  oe, onSubmit,subtitle,textAlign,service,pageGroups,currentPageGroupName,
  sectionSize
}) => {
  const [pos, setPos] = useState(0);
  const [contentOpen, setContentOpen] = useState(false);
  const [dropDownList, setDropDownList] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    parseDropdownOptions();
    const handleClickOutside = (event) => {
      const placeholder = document.querySelector('#placeholder');
      const container = document.querySelector('#drp-cont');
      if (placeholder && !container.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownOptions]);

  const parseDropdownOptions = () => {
    const parsed = [];
    dropdownOptions.forEach((item) => {
      if (item.selected) {
        setSelectedOption(item.name);
      }
      parsed.push(item);
    });
    setDropDownList(parsed);
  };

  const handleOptionSelect = (optionId, optionName) => {
    setSelectedOption(optionName);
    onSubmitDynamicForm(optionId);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setContentOpen(!contentOpen);
  };

  const closeDropdown = () => {
    setContentOpen(false);
  };

  const handleBack = () => {
    setPos(pos - 1);
  };

  const handleForward = () => {  
    setPos(pos + 1);
  };

  const checkForDialog = () => {
    const section = document.querySelector('section-page');
    return section && section.id === 'dialog' ? 'scroll-bar' : '';
  };



  return (
    <div id="dynamic-x-form-wrapper" className={`card form-x-card ${loading ? 'loading' : ''}`} style={{ boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.03)' }}>
      {loading && <div className="overlay"></div>}
      <header className="card-header" style={{ backgroundColor: '#YOUR_COLOR_HERE' }}>
        <FaArrowLeft 
          className="nav" 
          title="Back" 
          onClick={handleBack} 
          hidden={pos === 0} 
        />
        <div className={`dropdown-container ${contentOpen ? 'ss-open-below' : ''}`} id="dropdownSelect">
          <div id="drp-cont" className={`ss-dropdown-header ss-single-selected ${contentOpen ? 'ss-open-below' : ''}`} onClick={toggleDropdown}>
            <div className="ss-dropdown-label">
              <span className="label-name placeholder lbl is-active has-text-weight-bold">{dropdownLabel}</span>
              <span id="placeholder" className="placeholder label-name" style={{ height: '16px' }}>{selectedOption}</span>
            </div>
            <FaTimes className="ss-deselect ss-plus" onClick={() => setSelectedOption('')} style={{ fill: 'rgb(1, 50, 67)', height: '15px', width: '15px', position: 'absolute', top: '9px' }} />
            <div className="ss-icons">
              <span className="ss-arrow">
                <span className={contentOpen ? 'arrow-up' : 'arrow-down'}></span>
              </span>
            </div>
          </div>
          {contentOpen && (
            <div className={`ss-dropdown-collapsable ss-content ${contentOpen ? 'ss-open' : ''}`}>
              <ul id="dropdownList" className="ss-dropdown-items">
                {dropDownList.length === 0 ? (
                  <li className="ss-option">No values present. We are working on it.</li>
                ) : (
                  dropDownList.map((option) => (
                    <li key={option.id} className={`ss-option ${option.selected ? 'ss-option-selected' : ''}`} onClick={() => handleOptionSelect(option.id, option.name)}>
                      {option.name}
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>
        <FaArrowRight 
          className="nav" 
          title="Forward" 
          onClick={handleForward} 
          hidden={pos >= sections.length - 1} 
        />
      </header>
      {loading && <div className="pro-container"><progress className="progress is-small is-primary" max="100">15%</progress></div>}
      <div className={`card-content ${checkForDialog()}`}>
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
      </div>
    </div>
  );
};

DynamicFormX.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  loading: PropTypes.bool,
  sections: PropTypes.array,
  dropdownLabel: PropTypes.string,
  dropdownOptions: PropTypes.array,
  onSubmitDynamicForm: PropTypes.func.isRequired,
};

DynamicFormX.defaultProps = {
  title: '',
  details: '',
  loading: false,
  sections: [],
  dropdownLabel: '',
  dropdownOptions: [],
};

export default withFormBase(DynamicFormX);
