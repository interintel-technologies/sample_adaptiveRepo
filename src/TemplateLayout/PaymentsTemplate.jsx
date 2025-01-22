import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import withTemplate from '../core/mixins/template-mixin.js';
import { Route,  HashRouter as Router, Routes } from 'react-router-dom';
import Page from './Components/Page.jsx';
import NotFoundTemplate from './NotFoundTemplate.jsx';
import buyAirtime from "../../images/web/buy-airtime.jpg"

const PaymentTemplate = (props) => {

  return (
    <Router>
    <div style={{ 
      background: "linear-gradient(to bottom, var(--primary) 0%,var(--md-sys-color-inversePrimary) 100%,rgba(0,0,0,0) 80%)", 
      minHeight: "100vh", // Ensure it takes full viewport height
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      overflowY: "auto" 
    }}>
      <Container 
        maxWidth="lg" 
        style={{
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          height: "100%", 
          padding: "0 20px",
          overflowY: "auto"
        }}
      >
        <div style={{
          display: "flex",
          width: "100%",
          maxWidth: "1200px",
          background: "var(--paper)",
          borderRadius: "20px",
          boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          overflow: "hidden",
          height: "100vh",
          maxHeight: "90vh", // Adjust as needed for vertical centering
          position: "relative" // For absolute positioning of child elements
        }}>
          <div style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            display: "flex",
            alignItems: "center",
            zIndex: 1, // Ensure it appears above other elements
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: Add a background for better visibility
            padding: "10px",
            borderRadius: "50%",
            height: "20vh"
          }}>
            {/* <Typography variant="body2" color="textSecondary">Powered by</Typography> */}
            <img src="https://mipay.cash/media/administration_gateway_logo/mipay.png" alt="Logo" style={{ marginLeft: "10px", height: "36px" }} />
          </div>
          <div style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            height: "100%",
            display: "flex", // Enable flex layout for vertical scrolling
            flexDirection: "column"
          }}>
            <Grid container spacing={2} style={{ flex: 1 }}>
              <Grid item xs={12} style={{ height: "100%" }}>
              <Routes>
              {/* Use element prop to render the Page component */}
              <Route path="/:groupName/:pageName" element={<Page template="payments" pageGroups={props.pageGroups} />} />
              <Route path="*" element={<NotFoundTemplate/>} />

            </Routes>
              </Grid>
            </Grid>
          </div>
          <div className="image-section" 
            style={{
              flexShrink: 0,
              width: "50%", // Fixed width for the image section
              alignItems: "center", // Center the image vertically
              justifyContent: "center",
              backgroundSize: "cover",
              borderLeft: "2px solid var(--primary)", // Optional: Add a border to separate the sections
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/static/dsv3.0/images/web/buy-airtime.jpg')`, // Correctly formatted backgroundImage
            }}
            >
            <img src='/static/dsv3.0/images/web/buy-airtime.jpg' alt="" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </Container>

      <style>
        {`
          @media (max-width: 600px) {
            .image-section {
              display: none !important; /* Hide the right image section on small screens */
            }
          }

          @media (min-width: 601px) {
            .image-section {
              display: flex !important; /* Show the image section on larger screens */
            }
          }

          ::-webkit-scrollbar {
              display: none; /* Hides the scrollbar */
          }

          ::-webkit-scrollbar-thumb {
              display: none; /* Hides the scrollbar thumb */
          }

          ::-webkit-scrollbar-track {
              display: none; /* Hides the scrollbar track */
          }
        `}
      </style>
    </div>
    </Router>
   
  );
};

export default withTemplate(PaymentTemplate);
