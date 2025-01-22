import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { withFormBase } from '../FormBase';
import { Box, Grid, IconButton, Modal, Typography } from '@mui/material';
import EList from '../Elist';
import CloseIcon from '@mui/icons-material/Close';

const PopUpX = ({
  title, details, oe, setF, service, updateParentState,
  getForm2, submitForm, _dialog, getForm, pageGroups, currentPageGroupName,
  sectionSize
}) => {
  const [open, setOpen] = useState(false);
  const formRef = useRef(null); // Use useRef for form reference

  useEffect(() => {
    // Open modal after 2 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  // This effect runs after the modal opens and ensures formRef is set
  useEffect(() => {
    if (open && formRef.current) {
      getForm2(formRef.current);
    }
  }, [open, formRef.current]); // Only run this effect when modal is open and formRef is populated

  const getBgImage = () => {
    return details.bg_image || "https://interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png";
  };

  const getSubTitle = () => {
    return details.subtitle || "";
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal id="popup-x-wrapper" open={open} onClose={handleClose}>
      <form
        id="form popup-form"
        data-service={service}
        form-type="POPUP FORM"
        ref={formRef}  // Assign the ref to form element
      >
        <Box
          className="popup-form"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '70%', md: '50%' },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            outline: 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
    
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="popup-image">
                      <img src={getBgImage()} style={{ width: '100%' }} alt="popup brand" />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="h6"  component="h1">
                      {title}
                    </Typography>
                    <Typography  variant="subtitle2">
                      {getSubTitle()}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <IconButton onClick={handleClose}>
              <CloseIcon color="black" />
            </IconButton>
          </Box>
          <Box sx={{ mt: 2 }}>
            <EList
              oe={oe}
              pageGroups={pageGroups}
              currentPageGroupName={currentPageGroupName}
              submitForm={submitForm}
              getForm2={getForm2}
              sectionSize={sectionSize}
            />
          </Box>
        </Box>
      </form>
    </Modal>
  );
};

export default withFormBase(PopUpX);
