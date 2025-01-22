import React, { useEffect, useRef } from 'react';
import './tile-element-2';
import withDataSource from '../../core/mixins/datasource-mixin';
import { useTheme } from '@mui/material/styles';

const TileElement2 = ({ element, data, rows }) => {
  const tileElementRef2 = useRef(null);
  const theme = useTheme();
  useEffect(() => {
    if (tileElementRef2.current && element) {
      tileElementRef2.current.e = element;
      tileElementRef2.current.data = data;
      tileElementRef2.current.rows = rows;
    }
  }, [element, data, rows]);

  return (
    <div>
      {element && data && rows ? <tile-element-2 theme-background-color={theme.palette.background.paper} id="tile-element-2" ref={tileElementRef2}></tile-element-2> : <p>Loading data...</p>}
    </div>
  );
};

const TileElementWrapper2 =  withDataSource(TileElement2);
export default TileElementWrapper2