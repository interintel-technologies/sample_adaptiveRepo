import React, { useEffect, useRef } from 'react';
import './location-picker';


const locationPickerWrapper = (props) => {
  const { element } = props;
  
  const locationPickerRef = useRef(null);

  useEffect(() => {
    
    if (locationPickerRef.current && element) {
      locationPickerRef.current.e = element;
    }
  }, [element]);

  return (
    <div>
     
      {element ? (
        <location-picker id="location-picker" ref={locationPickerRef}></location-picker>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default locationPickerWrapper;

