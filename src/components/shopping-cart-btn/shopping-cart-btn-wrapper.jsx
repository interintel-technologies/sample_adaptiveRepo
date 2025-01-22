import React, { useEffect, useRef } from 'react';
import './shopping-cart-btn';
import withDataSource from '../../core/mixins/datasource-mixin';
import { Alert } from '@mui/material';

const shoppingCartBtnWrapper = (props) => {
  const { element, rows,cols,_dialog } = props;
  const shoppingCartBtnRef = useRef(null);

  useEffect(() => {
    
    if (shoppingCartBtnRef.current && element) {
      shoppingCartBtnRef.current.e = element;
      shoppingCartBtnRef.current.rows = rows;
      shoppingCartBtnRef.current.cols = cols;
      shoppingCartBtnRef.current._dialog = _dialog;

      

    }
  }, [element, rows, props]);

  return (
    <div>
     
      {element ? (
        <shopping-cart-btn id="shopping-cart-btn" ref={shoppingCartBtnRef}></shopping-cart-btn>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(shoppingCartBtnWrapper);
