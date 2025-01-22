import React from 'react';
import { Grid, Skeleton } from '@mui/material';

const SkeletonLayout = ({ containerHeight = '100vh', xsRight = 9, rightSkeletonHeight = 50 }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ minHeight: containerHeight }} // Set the container to take full height by default
    >
      <Grid item xs={2}>
        <Skeleton  />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </Grid>
      <Grid item xs={10}>
        <Skeleton height={rightSkeletonHeight} />
      </Grid>
    </Grid>
  );
};

export default SkeletonLayout;
