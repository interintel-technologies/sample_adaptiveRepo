import React, { useEffect, useRef } from 'react';
import './tile-element-6';
import withDataSource from '../../core/mixins/datasource-mixin';
import { useTheme } from '@mui/material/styles';

const TileElement6 = ({ element, data, rows,cols }) => {
  const tileElementRef6 = useRef(null);
  const theme = useTheme();
  useEffect(() => {
    if (tileElementRef6.current && element) {
      tileElementRef6.current.e = element;
      tileElementRef6.current.data = data;
      tileElementRef6.current.rows = rows;
      tileElementRef6.current.cols = cols;

    }
  }, [element, data,cols, rows]);

  return (
    <div>
      {element && data && rows && cols ? <tile-element-6 theme-background-color={theme.palette.background.paper} id="tile-element-6" ref={tileElementRef6}></tile-element-6> : <p>Loading data...</p>}
    </div>
  );
};

const TileElementWrapper6 = withDataSource(TileElement6);
export default TileElementWrapper6
