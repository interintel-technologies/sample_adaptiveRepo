import React from 'react';
import { Grid, Card, CardContent, Typography, IconButton, Box, Alert } from '@mui/material';
import withDataSource from '../../core/mixins/datasource-mixin';
import useMediaQuery from '@mui/material/useMediaQuery';

const FloatSummaryWrapper = ({ element, rows, cols, data }) => {
  // Check the screen size
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');

  // Function to adjust the typography variant based on screen size
  const getTypographyVariant = () => {
    if (isSmallScreen) return 'h6'; // Smaller font for small screens
    if (isMediumScreen) return 'h5'; // Medium font for medium screens
    return 'h4'; // Default for larger screens
  };

  console.log("data is ", data);

  return (
    <Card style={{ padding: 16, margin: 20, borderRadius: "var(--CornerLarge) !important", boxShadow: "var(--mui-shadows-3)" }}>
      <Typography variant="h5" gutterBottom>
      {element.name}
      </Typography>
      {data.length > 0 ? (
        <Grid container spacing={2}>
          {data && data.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <a target="_blank" href={item.path}>
                <Card sx={{transition:"0.03", '&:hover': {transform: 'scale(1.03)' }}} style={{ background: `var(--md-sys-color-surface)`, height: "10rem", borderRadius: "var(--CornerLarge)", transition: 'transform 0.3s ease', }}>
                  <CardContent style={{ display: 'flex', flexDirection: "column", justifyContent: "space-around", height: "100%" }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                      <img src={item.logo} alt={`${item.name} logo`} style={{ height: 30 }} />
                      <Typography variant={getTypographyVariant()} style={{ color: "var(--primary-text) !important", display: "flex", justifyContent: "flex-end" }}>
                        {item.amount}
                      </Typography>
                    </div>
                    <div style={{ width: '100%', display: "flex", justifyContent: "space-between" }}>
                      <Typography color="textSecondary">{item.description}</Typography>
                      <div style={{ height: "24px", width: "24px", borderRadius: "50%", boxShadow: "var(--mui-shadows-3)" }}>
                        <adaptive-ui-icon datacolor={`#000`} icon={'icons:MdOutlineChevronRight'} title={`nav button`}></adaptive-ui-icon>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>) : (
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

          <Box
            component="iframe"
            src="https://lottie.host/embed/250ea312-2a9c-4220-8609-eb636b1a2ab6/iYNtwoE6Fo.json"
            width="300px"
            height="300px"
            style={{ border: 'none' }}
          />
        </Box>
      )}
    </Card>
  );
};

export default withDataSource(FloatSummaryWrapper);
