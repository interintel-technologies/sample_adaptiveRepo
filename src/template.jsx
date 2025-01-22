import React, { useState, useEffect } from 'react';
import { CircularProgress, createTheme, CssBaseline, Grid, Skeleton, ThemeProvider } from '@mui/material';
import ServiceTemplate from './TemplateLayout/ServiceTemplate.jsx';
import LandingTemplate from './TemplateLayout/LandingTemplate.jsx';
import PaymentsTemplate from './TemplateLayout/PaymentsTemplate.jsx';
import './App.css';
import "material-dynamic-colors";
import rgbHex from 'rgb-hex';
import { computeLogo, gatewaySelector, interfaceSelector } from './core/mixins/adaptiveui-mixin.js';

const Template = (() => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const currentHour = new Date().getHours();
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    return isDarkMode || (currentHour >= 18 || currentHour < 6);
  });
  const [pgColor,setPgColor] = useState('rgb(0, 100, 28)')
  const [pgFont,setPgFont] = useState('Montserrat')
  const [secColor,setSecColor] = useState('rgba(55,22,96,1)')

  const current_template = window.TEMPLATE;

  // Extract the gateway and interface details
  const gatewayDetails = gatewaySelector(window.parsed_payload)._response;
  const interfaceDetails = interfaceSelector(window.parsed_payload)._pageGroups;
  const logo = computeLogo(gatewayDetails);
  const root = document.documentElement;

  useEffect(() => {
    const updateThemeByTime = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 18 || currentHour < 6) {
        setDarkMode(true);
        localStorage.setItem('theme', 'dark');
      } else {
        setDarkMode(false);
        localStorage.setItem('theme', 'light');
      }
    };

    // Check the theme at the initial render
    updateThemeByTime();

    // Set interval to check every hour if theme needs to be updated
    const intervalId = setInterval(updateThemeByTime, 60 * 5 * 1000); // every hour

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    if (gatewayDetails) {
          
      if (gatewayDetails.default_color) {
        
        setPgColor(gatewayDetails.default_color);

      generateTextColor(gatewayDetails.default_color)

      }

      if (gatewayDetails.font_family) {
        
        setPgFont(gatewayDetails.font_family);
      }

      if (gatewayDetails.secondary_color) {
        setSecColor(gatewayDetails.secondary_color);
      root.style.setProperty('--secondary', gatewayDetails.secondary_color);

      }

      localStorage.setItem('theme', darkMode ? 'dark' : 'light');

      
      // Call the generateTextColor after ensuring gatewayDetails are available
   
    }
    else{

      generateTextColor(pgColor)
    }
  }, [darkMode, gatewayDetails]);

  const generateTextColor = async (primaryColor) => {
    let hex_color,colors;
    const isRgbFormat = primaryColor.startsWith('rgb');

    if (isRgbFormat) {
      hex_color = rgbHex(primaryColor); // Only convert if valid RGB format
    colors = await materialDynamicColors(`#${hex_color}`);

    } else {
      hex_color = primaryColor
    colors = await materialDynamicColors(`${hex_color}`);
    }

    
    const currentTheme = localStorage.getItem('theme') || 'light';
    const root = document.documentElement;

    if (currentTheme === 'light' || currentTheme === 'dark') {
      Object.keys(colors[currentTheme]).forEach((key) => {
        root.style.setProperty(`--md-sys-color-${key}`, colors[currentTheme][key]);
      });
    } else {
      console.warn(`Unknown theme: ${currentTheme}. No colors applied.`);
    }
    
    setLoading(false)
  };

  const theme = createTheme({
    typography: {
      fontFamily: [
        `${String(pgFont).toLowerCase()}`, // Fallback font family
      ].join(','),
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: String(pgColor).toLowerCase(), // Fallback color
      },
      secondary: {
        main: String(secColor).toLowerCase(), // Fallback color
      },
      background: {
        paper: darkMode ? '#1A120B' : '#fff',
        default: darkMode ? '#231A13' : '#fafafa',
      },
    },
  });

  // Apply additional custom CSS properties
  root.style.setProperty('--paper', theme.palette.background.paper);
  root.style.setProperty('--primary', pgColor);
  root.style.setProperty('--default', theme.palette.background.default);
  root.style.setProperty('--secondary', secColor);
  root.style.setProperty('--primary-text', theme.palette.text.primary);
  root.style.setProperty('--white', theme.palette.common.white);
  root.style.setProperty('--black', theme.palette.common.black);
  root.style.setProperty('--family-sans-serif', theme.typography.fontFamily);
  root.style.setProperty('--app-default-color', pgColor);


  // Generate CSS variables based on the theme object
  const generateCssVariablesFromObject = (obj, prefix = '') => {
    const cssVariables = {};
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      const cssKey = `${prefix}${key}`;
      if (typeof value === 'object' && value !== null) {
        Object.assign(cssVariables, generateCssVariablesFromObject(value, `${cssKey}-`));
      } else {
        cssVariables[`--mui-${cssKey}`] = value;
      }
    });
    return cssVariables;
  };

  const cssVariables = generateCssVariablesFromObject(theme);

  // Append generated CSS variables to the document head
  const cssRootString = `
  :root {
    ${Object.entries(cssVariables)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n  ')}
  }
  `;
  const style = document.createElement('style');
  style.textContent = cssRootString;
  document.head.appendChild(style);

  if (loading) {
    switch (current_template) {
      case "service":
        return (
          <Grid
            container
            spacing={2}
            sx={{ minHeight: '100vh' }} // Set the container to take full height
          >
            <Grid item xs={4}>
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
            </Grid>
            <Grid item xs={8}>
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
            </Grid>
          </Grid>
        );
  
      default:
        // Default skeleton layout for other templates (top-to-bottom skeletons)
        return (
          <div className="has-text-centered">
          <CircularProgress size="30px" />
        </div>
        );
    }
  }

  return (
<ThemeProvider theme={theme}>
  <CssBaseline />
  {(() => {
    switch (current_template) {
      case 'service':
        return (
          <ServiceTemplate
            logo={logo}
            pageGroups={interfaceDetails}
            setDarkMode={setDarkMode}
            isdarkMode={`${darkMode}`}
          />
        );
      case 'landing':
        return (
          <LandingTemplate
            logo={logo}
            pageGroups={interfaceDetails}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        );
      case 'payments':
        return (
          <PaymentsTemplate
            logo={logo}
            pageGroups={interfaceDetails}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        );
      default:
        return <>Template not recognized</>;
    }
  })()}
</ThemeProvider>

  );
});

export default Template;
