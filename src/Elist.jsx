import React from 'react';
import { Grid, Fade } from '@mui/material';
import ElementLoader from './ElementLoader';

const EList = ({ sectionSize,skipForm, oe, pageGroups, currentPageGroupName, submitForm, handleChange, _dialog }) => {  

  return (
    <Grid container spacing={2}>
      {oe && oe.map((element, index) => {
        let gridProps;
        
        const gridString = element.__7 || ""; 
        const grids = gridString.split('|'); 

        if(!window.NEWSECTIONSIZE){
        if (grids[0] === "24") {
          gridProps = { xs: 12, sm: 12 }; 
        } else if (grids[0] === "18") {
          gridProps = { xs: 12, sm: 9 }
        }
        else if (grids[0] === "12") {
          gridProps = { xs: 12, sm: 6 }; 
        } else if (grids[0] === "8") {
          gridProps = { xs: 12, sm: 4 }; 
        } else if (grids[0] === "6") {
          gridProps = { xs: 12, sm: 3 }; 
        } else {
          // Handle relative position logic when window.RELATIVE_POSITION is true
          const row = parseInt(grids[0], 10) || 1; // Fallback to 1 if missing
          const column = parseInt(grids[1], 10) || 1; // Fallback to 1 if missing
          const span = parseInt(grids[2], 10) || 12; // Fallback to full width (12) if missing

          gridProps = {
            xs: 12,
            style: {
              gridRow: row,
              gridColumnStart: column,
              gridColumnEnd: `span ${span}`, // Span defines how many columns this element occupies
            }
          };
        }

      }
      else{
        const small = parseInt(grids[0], 10);
        const tablet = parseInt(grids[1], 10);
        const desktop = parseInt(grids[2], 10);
        
        gridProps = {
          xs: small === 24 ? 12 : small / 2, // Default xs size
          sm: tablet === 24 ? 12 : tablet / 2, // Default sm size
          md: desktop === 24 ? 12 : desktop / 2, // Default md size
        };
        
        // Adjust gridProps for small (mobile screens)
        if (small === 24) {
          gridProps = { ...gridProps, xs: 12 }; // Full width
        } else if (small === 12) {
          gridProps = { ...gridProps, xs: 6 }; // Half width
        } else if (small === 8) {
          gridProps = { ...gridProps, xs: 4 }; // Third width
        } else if (small === 6) {
          gridProps = { ...gridProps, xs: 3 }; // Quarter width
        }
        
        // Adjust gridProps for tablet (medium screens)
        if (tablet === 24) {
          gridProps = { ...gridProps, sm: 12 }; // Full width
        } else if (tablet === 12) {
          gridProps = { ...gridProps, sm: 6 }; // Half width
        } else if (tablet === 8) {
          gridProps = { ...gridProps, sm: 4 }; // Third width
        } else if (tablet === 6) {
          gridProps = { ...gridProps, sm: 3 }; // Quarter width
        }
        
        // Adjust gridProps for desktop (large screens)
        if (desktop === 24) {
          gridProps = { ...gridProps, md: 12 }; // Full width
        } else if (desktop === 12) {
          gridProps = { ...gridProps, md: 6 }; // Half width
        } else if (desktop === 8) {
          gridProps = { ...gridProps, md: 4 }; // Third width
        } else if (desktop === 6) {
          gridProps = { ...gridProps, md: 3 }; // Quarter width
        }
      }

        return (
          <Grid item key={index} {...gridProps} style={{display: "flex",alignItems: "center"}}>
            {/* Wrap the ElementLoader in a Fade transition */}
            <Fade in={true} timeout={1000} style={{ width: '100%' }}>
              <div className="element-loader" style={{ width: '100%' }}>
                <ElementLoader
                  skipForm={skipForm}
                  _dialog={_dialog}
                  submitForm={submitForm}
                  currentPageGroupName={currentPageGroupName}
                  pageGroups={pageGroups}
                  element={element}
                  onChange={handleChange}
                  sectionSize={sectionSize}
                />
              </div>
            </Fade>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default EList;
