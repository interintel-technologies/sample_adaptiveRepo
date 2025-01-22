import React, { useEffect, useRef } from 'react';
import './tile-element-7';
import withDataSource from '../../core/mixins/datasource-mixin';
import { useTheme } from '@mui/material/styles';

const TileElement7 = ({ element, data, rows,cols }) => {
  const tileElementRef7 = useRef(null);
  const theme = useTheme();
  useEffect(() => {
    if (tileElementRef7.current && element) {
      tileElementRef7.current.e = element;
      tileElementRef7.current.data = data;
      tileElementRef7.current.rows = rows;
      tileElementRef7.current.cols = cols;

    }
  }, [element, data,cols, rows]);

  return (
    <div>
      {element && data && rows && cols ? <tile-element-7 theme-background-color={theme.palette.background.paper} id="tile-element-7" ref={tileElementRef7}></tile-element-7> : <p>Loading data...</p>}
    </div>
  );
};


const TileElementWrapper7 = withDataSource(TileElement7);
export default TileElementWrapper7