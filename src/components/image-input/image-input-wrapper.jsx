import React, { useEffect, useRef } from 'react';
import './image-input';

const ImageInputWrapper = ({ element }) => {

  const imageInputRef = useRef(null);

  useEffect(() => {
    const imageElement = imageInputRef.current;

    if (imageElement && element) {
      imageElement.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <image-input id="image-input" ref={imageInputRef}></image-input>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default ImageInputWrapper;
