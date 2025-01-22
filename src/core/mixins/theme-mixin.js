import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hsl } from 'bulma-css-vars';
import { setTheme } from "../../slices/themeSlice.js";



const withTheme = (WrappedComponent) => {
  return (props) => {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const [currentTheme, setCurrentTheme] = useState(theme);

    useEffect(() => {
      setCurrentTheme(theme);
      appendFontLinkToDOM(theme.font);
    }, [theme]);

    const appendFontLinkToDOM = (font) => {
      const fontFamily = font.replace(/ /g, '+');
      const href = `https://fonts.googleapis.com/css2?family=${fontFamily.split(" ").join("+")}:wght@300;400;600;700;800&display=swap`;
      const link = document.createElement("link");
      document.documentElement.style.setProperty("--family-sans-serif", font);

      link.id = "googleFontLink";
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = href;

      let previousLink;
      previousLink = document.head.querySelector("#" + link.id);
      if (previousLink) {
        if (previousLink.getAttribute("href") !== link.href) {
          document.head.replaceChild(link, previousLink);
        }
      } else {
        document.head.appendChild(link);
      }
    };

    const applyFont = (font) => {
      const updatedTheme = { ...currentTheme, font: font ?? "Inter" };
      setCurrentTheme(updatedTheme);
      dispatch(setTheme(updatedTheme));
    };

    const applyMode = (mode) => {
      const updatedTheme = { ...currentTheme, mode: mode };
      setCurrentTheme(updatedTheme);
      document.documentElement.style.setProperty("--mode", updatedTheme.mode);
      dispatch(setTheme(updatedTheme));
    };

    const applyColors = (colors) => {
      const updatedTheme = { ...currentTheme, colors: colors };
      setCurrentTheme(updatedTheme);
      dispatch(setTheme(updatedTheme));
    };

    const darkModeColors = () => {
      return {
        'black': hsl(0, 0, 100),
        'black-bis': hsl(0, 0, 98),
        'black-ter': hsl(0, 0, 96),
        'white': hsl(0, 0, 4),
        'white-bis': hsl(0, 0, 7),
        'white-ter': hsl(0, 0, 14),
        "grey": hsl(0, 0, 48),
        "grey-dark": hsl(0, 0, 71),
        "grey-darker": hsl(0, 0, 86),
        "grey-lightest": hsl(0, 0, 93),
        'grey-light': hsl(0, 0, 29),
        'grey-lighter': hsl(0, 0, 21),
        "grey-darker": "#FFF",
        "grey-dark": "#FFF"
      };
    };

    const lightModeColors = () => {
      return {
        'white': hsl(0, 0, 100),
        'white-bis': hsl(0, 0, 98),
        'white-ter': hsl(0, 0, 96),
        'black': hsl(0, 0, 4),
        'black-bis': hsl(0, 0, 7),
        'black-ter': hsl(0, 0, 14),
        "grey": hsl(0, 0, 48),
        "grey-light": hsl(0, 0, 71),
        "grey-lighter": hsl(0, 0, 86),
        "grey-lightest": hsl(0, 0, 93),
        'grey-dark': hsl(0, 0, 29),
        'grey-darker': hsl(0, 0, 21),
      };
    };

    const setDerivedCSSVars = (initialColors) => {
      const derivedColors = {};
      derivedColors['scheme-main'] = initialColors["white"];
      derivedColors['scheme-main-bis'] = initialColors["white-bis"];
      derivedColors['scheme-main-ter'] = initialColors["white-ter"];
      derivedColors['scheme-invert'] = initialColors["black"];
      derivedColors['scheme-invert-bis'] = initialColors["black-bis"];
      derivedColors['scheme-invert-ter'] = initialColors["black-ter"];
      derivedColors['body-background-color'] = derivedColors["scheme-main-bis"];
      derivedColors['card-background-color'] = derivedColors["scheme-main"];
      derivedColors['dropdown-content-background-color'] = derivedColors["scheme-main"];
      derivedColors['input-background-color'] = initialColors["white"];
      derivedColors['modal-card-body-background-color'] = derivedColors["scheme-main-ter"];
      derivedColors['input-border-color'] = initialColors["grey-lighter"];
      return derivedColors;
    };

    const ignoreColors = (colors) => {
      const colorsToIgnore = ["turquoise", "cyan", "scheme-invert-bis", "scheme-invert-ter"];
      return Object.fromEntries(Object.entries(colors).filter(([k]) => !colorsToIgnore.includes(k)));
    };

    return (
      <WrappedComponent
        {...props}
        theme={currentTheme}
        applyFont={applyFont}
        applyMode={applyMode}
        applyColors={applyColors}
      />
    );
  };
};

export default withTheme;
