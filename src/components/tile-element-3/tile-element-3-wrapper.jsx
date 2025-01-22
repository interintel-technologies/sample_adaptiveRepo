import React, { useEffect, useRef } from 'react';
import './tile-element-3';
import withDataSource from '../../core/mixins/datasource-mixin';
import { useTheme } from '@mui/material/styles';

const TileElement3 = ({ element, data, rows }) => {
  const tileElementRef3 = useRef(null);
  const theme = useTheme();
  useEffect(() => {
    if (tileElementRef3.current && element) {
      tileElementRef3.current.e = element;
      tileElementRef3.current.data = data;
      tileElementRef3.current.rows = rows;
    }
  }, [element, data, rows]);

  return (
    <div>
      {element && data && rows ? <tile-element-3 theme-background-color={theme.palette.background.paper} id="tile-element-3" ref={tileElementRef3}></tile-element-3> : <p>Loading data...</p>}
    </div>
  );
};

const TileElementWrapper3 = withDataSource(TileElement3);
export default TileElementWrapper3