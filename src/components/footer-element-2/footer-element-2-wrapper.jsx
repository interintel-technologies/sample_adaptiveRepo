import React, { useEffect, useRef } from 'react';
import './footer-element-2';

const FooterElement2Wrapper = ({ element }) => {
  
  const footerElement2Ref = useRef(null);

  useEffect(() => {
    if (footerElement2Ref.current && element) {
      footerElement2Ref.current.e = element;

      

    }
  }, [element]);

  return (
    <>
      {element ? (
        <footer-element-2 id="footer-element-2" ref={footerElement2Ref}></footer-element-2>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default FooterElement2Wrapper;
