import React, { useState, useEffect, useRef } from 'react';
import './image-element';

const ImageElementWrapper = ({ element }) => {

  const imageElementRef = useRef(null);

  useEffect(() => {
    const imageElement = imageElementRef.current;

    if (imageElement && element) {
      imageElement.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <image-element id="image-element" ref={imageElementRef}></image-element>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default ImageElementWrapper;
