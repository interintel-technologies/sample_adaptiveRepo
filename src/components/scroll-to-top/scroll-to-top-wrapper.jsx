import React, { useState, useEffect } from 'react';

function ScrollToTop({ threshold = 300 }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const buttonStyle = {
    width: "50px",
    height: "50px",
    left: "20px",
    bottom: "20px",
    borderRadius: "50%",
    opacity: 0.7,
    background: "var(--app-accent-color)",
    cursor: "pointer",
    position: "fixed",
    zIndex: 2000,
    transition: "0.4s ease-in-out",
    padding: "10px",
    border: "none",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "scale(1)"
};


  const buttonHoverStyle = {
    ...buttonStyle,
    opacity: 1,
  };

  const buttonActiveStyle = {
    ...buttonStyle,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    isVisible && (
      <button
        style={buttonStyle}
        onClick={scrollToTop}
        aria-label="scroll back to top"
        onMouseOver={(e) => e.currentTarget.style.opacity = buttonHoverStyle.opacity}
        onMouseOut={(e) => e.currentTarget.style.opacity = buttonStyle.opacity}
        onMouseDown={(e) => e.currentTarget.style.boxShadow = buttonActiveStyle.boxShadow}
        onMouseUp={(e) => e.currentTarget.style.boxShadow = buttonStyle.boxShadow}
      >
<adaptive-ui-icon icon="arrow-upward" aria-hidden="true"></adaptive-ui-icon>      </button>
    )
  );
}

export default ScrollToTop;
