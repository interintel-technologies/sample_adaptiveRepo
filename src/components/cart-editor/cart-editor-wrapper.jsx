import React, { useEffect, useRef, useState } from 'react';
import './cart-editor';
import withDataSource from '../../core/mixins/datasource-mixin';
import withHttp from '../../core/mixins/http-mixin';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { eCommerceStore, setCart } from '../../slices/eCommerceSlice';

const CartEditorWrapper = ({ element, rows, cols, call }) => {
  const cartEditorRef = useRef(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('success'); // 'success' or 'error'
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogContent, setDialogContent] = useState('');
  const [dialogAction, setDialogAction] = useState(null);

  useEffect(() => {
    if (cartEditorRef.current && element) {
      cartEditorRef.current.e = element;
      cartEditorRef.current.rows = rows;
      cartEditorRef.current.cols = cols;
    }
  }, [element, rows, cols]);

  useEffect(() => {
    const handleServiceCall = async (event) => {
      const { service, params, Cart } = event.detail;
      console.log("submit-cart event data:", event.detail);

      // Update store with new cart data
      if (Cart) {
        eCommerceStore.dispatch(setCart(Cart));
      }

      try {
        const response = await call(service, params);
        console.log("response is ", response.response.response_status);
        const status = response.response.response_status;

        let summary;
        if (status === "00") {
          summary = window.NO_NETWORKING ? "Updated offline" : "Updated successfully";
          setSnackbarType('success');
        } else {
          summary = "Update failed";
          setSnackbarType('error');
        }
        setSnackbarMessage(summary);
      } catch (error) {
        const summary = window.NO_NETWORKING ? "Updated offline" : "Update failed";
        setSnackbarMessage(summary);
        setSnackbarType('error');
      } finally {
        setSnackbarOpen(true); // Ensure Snackbar is shown
      }
    };

    // Listen for the custom event
    window.addEventListener('submit-cart', handleServiceCall);

    return () => {
      window.removeEventListener('submit-cart', handleServiceCall);
    };
  }, [call]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleDialogOpen = (title, content, action) => {
    setDialogTitle(title);
    setDialogContent(content);
    setDialogAction(() => action);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setDialogTitle('');
    setDialogContent('');
    setDialogAction(null);
  };

  const handleConfirm = async () => {
    setDialogOpen(false);
    if (dialogAction) {
      await dialogAction(); // Perform the action (e.g., update cart)
    }
  };

  const onRemoveOneClickHandler = (id) => {
    const quantity = cartEditorRef.current.getCartItemQuantity(id) - 1;

    if (quantity < 1) {
      handleDialogOpen(
        'Remove item from Cart',
        'Are you sure you want to remove this item from the cart?',
        async () => {
          await cartEditorRef.current.updateCart(id, 0);
          // Update the cart after the action
          const state = eCommerceStore.getState();
          eCommerceStore.dispatch(setCart(state.ecCommerce.cart));
        }
      );
    } else {
      cartEditorRef.current.updateCart(id, quantity);
    }
  };

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000} // Snackbar will disappear after 4 seconds
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // Position the Snackbar to the bottom right
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarType} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      {element && rows && cols ? (
        <cart-editor id="cart-editor" ref={cartEditorRef}></cart-editor>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default withHttp(withDataSource(CartEditorWrapper));
