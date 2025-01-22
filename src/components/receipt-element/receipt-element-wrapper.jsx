import React, {  useEffect, useRef } from 'react';
import './receipt-element';
import withDataSource from '../../core/mixins/datasource-mixin';
import { useTheme } from '@mui/material';

const ReceiptElementWrapper = ({element, rows, cols}) => {
  
  const ReceiptElementRef = useRef(null);
  const theme=useTheme();

  const hexToRgbA=(hex)=>{
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',.15)';
    }
    throw new Error('Bad Hex');
}

  const bgColor=hexToRgbA(theme.palette.primary.main);


  useEffect(() => {
    if (ReceiptElementRef.current && element) {
      ReceiptElementRef.current.e = element;
      ReceiptElementRef.current.rows = rows;
      ReceiptElementRef.current.cols = cols;
      ReceiptElementRef.current.bgColor=bgColor;
    }

  }, [element,rows, cols,bgColor]);

  return (
    <div>
      
      {element && rows && cols ? <receipt-element id="receipt-element" ref={ReceiptElementRef}></receipt-element> : <p>Loading data...</p>}

    </div>
  );
};

export default withDataSource(ReceiptElementWrapper) ;
