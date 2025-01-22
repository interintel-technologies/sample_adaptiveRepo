import React, { useEffect, useRef } from 'react';
import './login-mipay';


const loginMipayWrapper = (props) => {
  const { element } = props;
  
  const loginMiPayRef = useRef(null);

  useEffect(() => {
    
    if (loginMiPayRef.current && element) {
      loginMiPayRef.current.e = element;
    }
  }, [element]);

  return (
    <div>
     
      {element ? (
        <login-mipay id="login-mipay" ref={loginMiPayRef}></login-mipay>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default loginMipayWrapper;

