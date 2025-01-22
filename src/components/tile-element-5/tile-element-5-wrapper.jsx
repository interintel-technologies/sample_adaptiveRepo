import React, { useEffect, useRef } from 'react';
import './tile-element-5';
import withDataSource from '../../core/mixins/datasource-mixin';
import { useTheme } from '@mui/material/styles';

const TileElement5 = ({ element, data, rows,cols }) => {
  const tileElementRef5 = useRef(null);
  const theme = useTheme();
  useEffect(() => {
    if (tileElementRef5.current && element) {
      tileElementRef5.current.e = element;
      tileElementRef5.current.data = data;
      tileElementRef5.current.rows = rows;
      tileElementRef5.current.cols = cols;

    }
  }, [element, data,cols, rows]);

  return (
    <div>
      {element && data && rows && cols ? <tile-element-5 theme-background-color={theme.palette.background.paper} id="tile-element-5" ref={tileElementRef5}></tile-element-5> : <p>Loading data...</p>}
    </div>
  );
};

const TileElementWrapper5 =  withDataSource(TileElement5);
export default TileElementWrapper5