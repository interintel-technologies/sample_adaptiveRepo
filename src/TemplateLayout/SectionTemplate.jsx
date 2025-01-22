import React from 'react';
import { Modal, Backdrop, CircularProgress, Alert, Box, Button, Typography } from '@mui/material';
import withHttp from '../core/mixins/http-mixin';
import withTemplate from '../core/mixins/template-mixin';
import FormRender from '../FormRender';
import '../components/adaptive-ui-icon'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 589,
  bgcolor: "white",
  p: 1,
  borderRadius: 4, // Adding border-radius for rounded corners
};

export const STATUS_SUCCESS = "00";
export const STATUS_FAILED = "96";

const SectionTemplate = ({service, pageGroups, currentPageGroupName, feed, open, onClose, pageSections, setPageSectionsInSection }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box sx={style}>
        {/* Modal Header with grey background and a close button */}
        <Box 
          sx={{ 
            backgroundColor: '#f5f5f5',  // Grey background for the header
            padding: 0,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {service}
          </Typography>
          &times;
          <adaptive-ui-icon onClick={onClose} icon={'icons:MdClose'}></adaptive-ui-icon>

       
        </Box>

        {/* Modal Body */}
        {pageSections && pageSections.map((pageSection, indexSection) => (
          <section
            style={{ background: "var(--md-sys-color-surfaceContainerLowest)" }}
            id={pageSection._title.toLowerCase()}
            key={indexSection}
          >
            {pageSection._feedList && pageSection._feedList.map((feed, indexFeed) => (
              <FormRender
                key={indexFeed}
                pageGroups={pageGroups}
                feed={feed}
                currentPageGroupName={currentPageGroupName}
                setPageSections={setPageSectionsInSection}
              />
            ))}
          </section>
        ))}
      </Box>
    </Modal>
  );
};

export default withTemplate(withHttp(SectionTemplate));
