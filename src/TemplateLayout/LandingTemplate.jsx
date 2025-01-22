import React, { useState } from 'react';
import { Box } from '@mui/material';

import { Route, Routes,HashRouter as Router } from 'react-router-dom';

import Page from './Components/Page.jsx';
import withTemplate from '../core/mixins/template-mixin.js';



const LandingTemplate = (props) => {

  return (
    <Router>
      <div className="landing-page-template" sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <div sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'auto',overflowX:"hidden" }}>
        <Routes>
              {/* Use element prop to render the Page component */}
              <Route path="/:groupName/:pageName" element={<Page template="landing" pageGroups={props.pageGroups} />} />
            </Routes>
        </div>

      </div>
      </Router>

  );
};

export default withTemplate(LandingTemplate);
