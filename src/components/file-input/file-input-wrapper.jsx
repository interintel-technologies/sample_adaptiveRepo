import React, { useEffect, useRef } from 'react';
import './file-input';

const FileInputWrapper = ({element}) => {
  
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (fileInputRef.current && element) {
      const fileInputElement = fileInputRef.current;

      fileInputElement.e = element;

    }

  }, [element]);

  return (
  <>
    {element &&  <file-input id="file-input" ref={fileInputRef}></file-input> }
    </>
  );
};

export default FileInputWrapper;
