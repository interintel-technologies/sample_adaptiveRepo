import React, { useEffect, useRef } from 'react';
import './subdomain-input';

const subdomainInputWrapper = (props) => {
  const { element } = props;
  
  console.log("element subdomain input ",element);
  
  
  const subdomainInputRef = useRef(null);

  useEffect(() => {
    
    if (subdomainInputRef.current && element) {
      subdomainInputRef.current.e = element;

    }
  }, [element]);

  return (
    <div>
     
      {element ? (
        <subdomain-input id="subdomain-input" ref={subdomainInputRef}></subdomain-input>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default subdomainInputWrapper;