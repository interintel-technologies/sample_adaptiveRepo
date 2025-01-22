import React, { useEffect, useState, useRef } from 'react';
import 'fa-icons';

const FooterElement = ({ element }) => {
  const [footerDetails, setFooterDetails] = useState(element || null);
  const footerRef = useRef(null);

  useEffect(() => {
    setFooterDetails(element);
  }, [element]);

  useEffect(() => {
    const body = document.querySelector('.page');
    const footer = footerRef.current;
    const viewportWidth = window.innerWidth;

    if (footerDetails && viewportWidth > 768) {
      scrollAdjuster();
    }

    const handleScroll = () => scrollObserver();

    body?.addEventListener("scroll", handleScroll);
    footer?.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      body.removeEventListener("scroll", handleScroll);
      footer?.removeEventListener("scroll", handleScroll);
    };
  }, [footerDetails]);

  const scrollAdjuster = () => {
    const body = document.querySelector('.page');
    const footer = footerRef.current;
    const footerLength = footer.clientHeight;
    body.classList.remove('p-3');
    body.style.padding = `.75em .75em ${footerLength}px .75em`;
  };

  const scrollObserver = () => {
    const footer = footerRef.current;
    const viewportWidth = window.innerWidth;

    if (viewportWidth > 768 && footer) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            footer.classList.add('fixed');
            footer.style.display = 'block';
          }
        });
      });
      observer.observe(footer);
    }
  };

  const checkLink = (e) => {
    const link = e.target.getAttribute("href");
    if (link === "") {
      e.preventDefault();
    }
  };

  const getCurrentYear = () => new Date().getFullYear();

  const getHref = (text) => {
    if (text.includes("|")) {
      let [, link] = text.split('|');
      return link;
    }
    return "";
  };

  const getLinkTitle = (text) => {
    if (text.includes("|")) {
      let [title] = text.split('|');
      return title;
    }
    return text;
  };

  if (!footerDetails) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="footer-1-wapper">
  <footer ref={footerRef} className="landing-footer ii__footer has-background-primary">
      <div className="ii__container wa__container">
        <div className="ii-footer-flexcontainer columns">
          <div className="column">
            <div className="ii__footer-branding">
              <a href="#"><img src={footerDetails?.details?.logo_path} alt="footer branding" /></a>
            </div>
            <p className="ii__paragraph footer-rights" style={{ fontWeight: 'normal' }}>
              {footerDetails?.details?.location || ''}
            </p>
            <p className="ii__paragraph footer-rights" style={{ fontWeight: 'normal' }}>
              {footerDetails?.details?.address || ''}
            </p>
          </div>
          <div className="column">
            <div className="ii-footerfexrow">
              {footerDetails?.details?.links.map((slide, index) => (
                <div className="ii-footer-col" key={index}>
                  <h3 className="ii__footer-col-title is-capitalized">{slide.title}</h3>
                  {slide.title === "Socials" ? (
                    slide.links.map((link, idx) => (
                      <a
                        key={idx}
                        className="ii__footer-col-link"
                        rel="noopener"
                        href={getHref(link)}
                        onClick={checkLink}
                        target="_blank"
                      >
                        <span className="icon">
                          <i className={`fa-brands fa-${getLinkTitle(link)}`}></i>
                        </span>
                      </a>
                    ))
                  ) : (
                    slide.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={getHref(link)}
                        onClick={checkLink}
                        target="_blank"
                        className="ii__footer-col-link"
                      >
                        {getLinkTitle(link)}
                      </a>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="columns">
            <div className="column">
              <p className="ii__paragraph is-size-7 footer-rights">
                {footerDetails?.name} Copyright &copy; {getCurrentYear()}. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  
  );
};

export default FooterElement;
