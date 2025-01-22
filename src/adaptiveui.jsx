import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setOffline, setPage, setPageGroup, setPayload, setView } from './slices/appSlice';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import './App.css';
import Template from './template.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const AdaptiveUi = ({ appTitle, payloadjson, csrfToken, page, pageGroup }) => {
  const dispatch = useDispatch();
    
  useEffect(() => {
    window.template = window.TEMPLATE;
    window.csrfToken = csrfToken;

    dispatch(setPayload(window.PAYLOAD));
    
    installRouter(location => setupRouting(window.decodeURIComponent(location.pathname)));
    installOfflineWatcher((offline) => dispatch(setOffline(offline)));

  }, []);

// Safely parse the JSON if it's a string, otherwise use it directly
const page_input_json = (() => {
  const inputSource = window.PAYLOAD.response.get_interface?.this_page_inputs || window.PAYLOAD.response.get_section.this_page_inputs;
  return typeof inputSource === "string" ? JSON.parse(inputSource) : inputSource;
})();

    
  const thisPageInputs = page_input_json;

  const firstPageGroup = thisPageInputs[Object.keys(thisPageInputs)[0]]["section_var"][0].replace(/ /g, '-');

  const firstKey = Object.keys(thisPageInputs)[0];
  const firstObject = thisPageInputs[firstKey];
  const firstInnerKey = Object.keys(firstObject)[0];
  const firstInnerObject = firstObject[firstInnerKey];
  const firstInnerObjectValue = firstInnerObject[Object.keys(firstInnerObject)[0]];
  const initialPage = firstInnerObjectValue[0];

  const setupRouting = (path) => {
    if (!window.location.hash) {
      window.location.href = window.location.href + `#/${firstPageGroup.replace(/ /g, '-').toLowerCase()}/${initialPage.replace(/ /g, '-').toLowerCase()}`;
    }

    let paths = path.split('/').filter(x => x);
    let hashes = window.location.hash.split('/');

    const pageGroup = hashes[1] || 0;
    const page = hashes[2] || 0;

    dispatch(setPageGroup(pageGroup));
    dispatch(setPage(page));

    if (paths.length > 1) {
      const view = 'dialog';
      dispatch(setView(view));
    }
  };

  return (
    <div id='adaptive-ui'>
      <div className="template page">
      <Template />
      </div>
    </div>
  );
};

export default AdaptiveUi;
