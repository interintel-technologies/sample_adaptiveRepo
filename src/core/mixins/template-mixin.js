import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { setView } from '../../slices/appSlice';
import { GetSection } from './../parsers/commands/get-section';
import { Logger } from '../logger.js';
import withAdaptiveUI from './adaptiveui-mixin.js';

export const VIEW_MODE_MAIN = 'main';
export const VIEW_MODE_DIALOG = 'dialog';

const withTemplate = (WrappedComponent) => {
  const TemplateHOC = React.forwardRef((props, ref) => {


    

    const onEscapeKeyDownInSectionPageHandler = useCallback((evt) => {
      const isEscape = evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === 27;
      if (isEscape) {
        hideSectionPage();
      }
    }, []);


    const logout = useCallback((evt) => {
      evt.preventDefault();
      window.location = '/logout/';
    }, []);

    const computeLogo = useCallback((gateway) => {
      let defaultUrl = 'https://ui-avatars.com/api/?background=FFFFFF&name=' + gateway.name;
      
      if (gateway.iconImage) {
        defaultUrl = `/media/${gateway.iconImage}`;
      }
      if (gateway.logo) {
        defaultUrl = `/media/${gateway.logo}`;
      }
      if (gateway.logo == null || gateway.iconImage == null) {
        defaultUrl = 'https://interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png';
      }
      return defaultUrl;
    }, []);




    const checkForPaymentMethodSummaryReload = useCallback(() => {
      const formRenders = document.querySelectorAll('form-render');

      formRenders.forEach(form => {
        const formX = form.shadowRoot?.querySelector('form-x');
        const eList = formX?.querySelector('e-list');
        const paymentMethodSummary = eList?.shadowRoot?.querySelector('payment-method-summary');

        if (paymentMethodSummary) {
          paymentMethodSummary.refresh();
        }
      });
    }, []);

    const gridClasses = useCallback((feed) => {
      let grids;
      if (!feed.sectionSize) {
        grids = '24|24|24'.split('|');
      } else {
        grids = feed.sectionSize.split('|');
      }
      try {
        return `is-${Math.floor(Number(grids[0] / 2))}`;
      } catch (e) {
        return 'is-12';
      }
    }, []);

    const computePage = (getSection) => {
      
      const pageGroup = getSection.pageGroups[0];
      const title = pageGroup.title;
      return pageGroup.getTab(0);
    };

    const scrollToTop = useCallback(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
      <WrappedComponent
        {...props}
        ref={ref}
        adaptiveUI={{
        
          onEscapeKeyDownInSectionPageHandler,
          logout,
          computeLogo,
      
          checkForPaymentMethodSummaryReload,
          gridClasses,
          computePage,
          scrollToTop
        }}
      />
    );
  });

  return withAdaptiveUI(TemplateHOC);
};

export default withTemplate;
