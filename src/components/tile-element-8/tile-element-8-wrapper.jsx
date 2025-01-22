import React, { useEffect, useRef } from 'react';
import './tile-element-8';
import withDataSource from '../../core/mixins/datasource-mixin';
import { useTheme } from '@mui/material/styles';

const TileElemen8 = ({ element, data, rows,cols }) => {
  const tileElementRef8 = useRef(null);
  const theme = useTheme();
  useEffect(() => {
    if (tileElementRef8.current && element) {
      tileElementRef8.current.e = element;
      tileElementRef8.current.data = data;
      tileElementRef8.current.rows = rows;
      tileElementRef8.current.cols = cols;

    }
  }, [element, data,cols, rows]);

  return (
    <div>
      {element && data && rows && cols ? <tile-element-8 theme-background-color={theme.palette.background.paper} id="tile-element-8" ref={tileElementRef8}></tile-element-8> : <p>Loading data...</p>}
    </div>
  );
};

const TileElementWrapper8 = withDataSource(TileElemen8);
export default TileElementWrapper8
