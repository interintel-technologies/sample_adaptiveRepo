import React, { useEffect, useRef } from 'react';
import { Fade } from '@mui/material'; // Import Fade component from Material-UI
import './static-dropdown-select';
import withDataSource from '../../core/mixins/datasource-mixin';

const StaticDropdownWrapper = ({ element, rows, cols }) => {
  const splitDetailsRef = useRef(null);
  
  useEffect(() => {
    if (splitDetailsRef.current && element) {
      splitDetailsRef.current.e = element;
      if (element.variableType === "STATIC DROPDOWN SELECT") {
        splitDetailsRef.current.items = JSON.parse(element.defaultValue);
      }
      splitDetailsRef.current.rows = rows;
      splitDetailsRef.current.cols = cols;
      splitDetailsRef.current.icon = element.icon;
      splitDetailsRef.current.sectionSize = element.sectionSize;
    }
  }, [element, rows, cols]); // Added rows and cols to the dependency array

  // Determine if fade should be applied
  const fadeIn = Boolean(element); // Set fadeIn to true if element exists, false otherwise

  return (
    <div>
      <Fade in={fadeIn} timeout={500}>
        <div>
          {element ? (
            <static-dropdown-select id="static-dropdown-select" ref={splitDetailsRef}></static-dropdown-select>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default withDataSource(StaticDropdownWrapper);
