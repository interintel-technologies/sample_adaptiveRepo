import React, { useRef } from 'react';

const withUtils = (WrappedComponent) => {
  const UtilsHOC = (props) => {
    const ref = useRef(null);

    // Static utility functions
    const isEmpty = (str) => {
      return (str.length === 0 || !str.trim());
    };

    const toTitleCase = (item) => {
      if (!item) return '';
      item = item.toString();
      item = item.toLowerCase().split(' ');
      let newItem = [];
      for (let i = 0; i < item.length; i++) {
        newItem[i] = item[i].charAt(0).toUpperCase() + item.slice(1);
      }
      return newItem.join(' ');
    };

    // Utility functions
    const qs = (selector) => {
      return ref.current ? ref.current.querySelector(selector) : document.querySelector(selector);
    };

    const qsa = (selector) => {
      return ref.current ? ref.current.querySelectorAll(selector) : document.querySelectorAll(selector);
    };

    const randomColorGenerator = (numberOfSteps, step) => {
      let r, g, b;
      let h = step / numberOfSteps;
      let i = Math.floor(h * 6);
      let f = h * 6 - i;
      let q = 1 - f;
      switch (i % 6) {
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
      }
      const color = "#" +
        ("00" + Math.round(r * 255).toString(16)).slice(-2) +
        ("00" + Math.round(g * 255).toString(16)).slice(-2) +
        ("00" + Math.round(b * 255).toString(16)).slice(-2);
      return color;
    };

    const formatToKenyaShillings = (value) => {
      return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(value);
    };

    return (
      <WrappedComponent
        {...props}
        isEmpty={isEmpty}
        toTitleCase={toTitleCase}
        qs={qs}
        qsa={qsa}
        randomColorGenerator={randomColorGenerator}
        formatToKenyaShillings={formatToKenyaShillings}
        ref={ref}
      />
    );
  };

  return UtilsHOC;
};

export default withUtils;
