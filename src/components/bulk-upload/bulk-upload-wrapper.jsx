import React, {  useEffect, useRef } from 'react';
import './bulk-upload';

const BulkUploadWrapper = ({details,element}) => {
  
  const bulkUploadRef = useRef(null);
  
  useEffect(() => {

   
    if (bulkUploadRef.current && details) {
      bulkUploadRef.current.details = details
    }

  }, [details]);


  useEffect(() => {
    if (bulkUploadRef.current && element) {
      const bulkUploadElement = bulkUploadRef.current;
      bulkUploadElement.e = element;
    }
  },[element]);
  return (
    <div>
      
       <bulk-upload id="bulk-upload" ref={bulkUploadRef}></bulk-upload>

    </div>
  );
};

export default BulkUploadWrapper;
