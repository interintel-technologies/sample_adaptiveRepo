import React, { useEffect, useState } from 'react';
import { Alert, Box, CircularProgress, Grid, Typography } from '@mui/material';
import withDataSource from '../../core/mixins/datasource-mixin';

const SummaryboxesWrapper = ({ element, data, rows, cols, groups,isDscLoading }) => {

;
  


  const _computeData = (index) => {
    return data[index] || [];
  };

  const _rowsOrColumns = (cData) => {
    if (!cData) return 0;
    return cData.length;
  };

  useEffect(() => {

  }, [cols, rows, data]);

  if (isDscLoading) {
    // Display loader while data is being fetched or prepared
    return (
      <div className="has-text-centered">  <CircularProgress size="30px" /> </div>

    );
  }

  return (
    <Box p={2}>
      {!isDscLoading  ? (
        <Grid container spacing={2}>
          {!_rowsOrColumns(rows) ? (
            groups.length === 0 ? (
              <Grid item xs={12}>
                <Box textAlign="center">
                  <Typography variant="body1">{element?.details?.empty_message}</Typography>
                  <Typography variant="body2">{element?.details?.gateway}</Typography>
                </Box>
              </Grid>
            ) : (
              groups.map((group, groupIndex) => (
                data.length === 0 ? (
                  <Grid item xs={12} key={groupIndex}>
                    <Box textAlign="center">
                      <Typography variant="body1">{element?.details?.empty_message}</Typography>
                      <Typography variant="body2">{element?.details?.gateway}</Typography>
                    </Box>
                  </Grid>
                ) : (
                  <>
                   <Typography variant="body1 px-4 mt-4">{group}</Typography>
                   <Grid container item spacing={2} key={groupIndex}>
                    {_computeData(groupIndex).map((item, idx) => (
                      <Grid item xs={12} sm={6} md={3} key={idx}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          border={1}
                          borderColor="divider"
                          p={2}
                          borderRadius={1}
                          textAlign="center"
                          bgcolor="background.paper"
                          height="100%" // Ensure the Box takes up full height of its container
                        >
                          <Box mb={2} flex="1">
                          <svg viewBox="0 0 230 100" className="chart">
                                       <polyline fill="none" stroke="#23d160" stroke-width="5" points="
                                           00,100
                                           60,70
                                           90,90
                                           140,10
                                           160,80
                                           180,60
                                           250,100
                                           "></polyline>
                                       
                                   </svg>
                          </Box>
                          <Box mb={2} flex="1">
                            <Typography variant="h6">{item.count}</Typography>
                          </Box>
                          
                          <Box flex="1">
                            {element?.details?.unit && (
                              <Typography variant="body2" color="textSecondary">
                                {element.details.unit}
                              </Typography>
                            )}
                            <Typography variant="body2">{item.description}</Typography>
                            <Typography variant="body2">{item.kind}</Typography>
                            <Typography variant="body2">{item.type}</Typography>
                            <Typography variant="body2">{item.name}</Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  </>
                 
                )
              ))
            )
          ) : (
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                {element.name}
              </Typography>
            </Grid>
          )}
        </Grid>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Alert severity="warning" sx={{ marginBottom: 2, width: '100%' }}>
            There is no data to preview at this time
          </Alert>

         
        </Box>
      )}
    </Box>
  );
};

export default withDataSource(SummaryboxesWrapper);
