import React, { useEffect, useRef } from 'react';
import './tile-element-4';
import withDataSource from '../../core/mixins/datasource-mixin';
import { useTheme } from '@mui/material/styles';

const TileElement4 = ({ element, data, rows,cols }) => {
  const tileElementRef4 = useRef(null);
  const theme = useTheme();
  useEffect(() => {
    if (tileElementRef4.current && element) {
      tileElementRef4.current.e = element;
      tileElementRef4.current.data = data;
      tileElementRef4.current.rows = rows;
      tileElementRef4.current.cols = cols;

    }
  }, [element, data,cols, rows]);

  return (
    <div>
      {element && data && rows && cols ? <tile-element-4 theme-background-color={theme.palette.background.paper} id="tile-element-4" ref={tileElementRef4}></tile-element-4> : <p>Loading data...</p>}
    </div>
  );
};

const TileElementWrapper4 = withDataSource(TileElement4);
export default  TileElementWrapper4