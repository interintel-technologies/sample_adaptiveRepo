import React, { useEffect, useRef } from 'react';
import './tile-element';
import withDataSource from '../../core/mixins/datasource-mixin';
import { useTheme } from '@mui/material/styles';

const TileElement = ({ element, data, rows }) => {
  const tileElementRef = useRef(null);
  const theme = useTheme();

  
  useEffect(() => {
    if (tileElementRef.current && rows) {
      tileElementRef.current.rows = rows;
      tileElementRef.current.contrast = theme.palette.getContrastText(theme.palette.primary.main)

    }
  }, [rows]);

  return (
    <div>
      {element && data && rows ? <tile-element theme-background-color={theme.palette.background.paper} ref={tileElementRef}></tile-element> : <p>Loading data...</p>}
    </div>
  );
};


const TileElementWrapper = withDataSource(TileElement);
export default TileElementWrapper