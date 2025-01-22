import React, { useEffect, useRef } from 'react';
import './text-view';
import { useTheme } from '@mui/material/styles';

const TextViewWrapper = ({ element }) => {
  const textViewRef = useRef(null);
  const theme = useTheme();
  useEffect(() => {
    if (textViewRef.current && element) {
      textViewRef.current.e = element;
    }
  }, [element]);

  return (
    <div>
      {element  ? <text-view theme-background-color={theme.palette.background.paper} id="text-view" ref={textViewRef}></text-view> : <p>Loading data...</p>}
    </div>
  );
};

export default TextViewWrapper;
