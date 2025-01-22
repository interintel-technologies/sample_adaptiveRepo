import React, { useState, useEffect, useRef } from 'react';
import './hyperlink-element';

const HyperLinkWrapper = ({ element,_dialog }) => {

  const hyperLinkRef = useRef(null);

  useEffect(() => {
    const hyperlinkElement = hyperLinkRef.current;

    if (hyperlinkElement && element) {
      hyperlinkElement.e = element;
      hyperlinkElement._dialog = _dialog

      const handleParagraphClick = () => {
        setOpen(true);
      };

      hyperlinkElement.addEventListener('paragraph-clicked', handleParagraphClick);

      return () => {
        if (hyperlinkElement) {
          hyperlinkElement.removeEventListener('paragraph-clicked', handleParagraphClick);
        }
      };
    }
  }, [element]);

  return (
    <div>
      {element ? (
        <hyperlink-element id="hyperlink-element" ref={hyperLinkRef}></hyperlink-element>
      ) : (
        <p>Loading data...</p>
      )}

    </div>
  );
};

export default HyperLinkWrapper;
