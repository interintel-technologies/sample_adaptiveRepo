import React, { useEffect, useState } from 'react';
import { Grid, Typography, Icon, Box, CircularProgress, Card, CardContent } from '@mui/material';
import { green, blue, red, orange } from '@mui/material/colors';
import ElementLoader from '../ElementLoader.jsx'; // Placeholder for custom Element Loader

const getStatusStyles = (type) => {
  switch (type) {
    case 'success':
      return {
        iconColor: green[500],
        titleColor: green[700],
      };
    case 'info':
      return {
        iconColor: blue[500],
        titleColor: blue[700],
      };
    case 'danger':
      return {
        iconColor: red[500],
        titleColor: red[700],
      };
    case 'in-progress':
      return {
        iconColor: orange[500],
        titleColor: orange[700],
      };
    default:
      return {
        iconColor: 'grey',
        titleColor: 'black',
      };
  }
};

const StatusForm = ({ type, subtitle, elements, onSubmit }) => {
  const { iconColor, titleColor } = getStatusStyles(type);
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCustomSubmit = () => {
  
    if (onSubmit) {
      onSubmit(formData); // Call the submit handler
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" style={{ color: titleColor }}>
              {type}!
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" marginY={2}>
              {type === 'in-progress' ? (
                <CircularProgress size={60} />
              ) : (
                <Icon style={{ fontSize: 60, color: iconColor }}>
                  {type === 'success' && 'check_circle'}
                  {type === 'info' && 'info'}
                  {type === 'danger' && 'error'}
                  {type === 'in-progress' && 'hourglass_empty'}
                </Icon>
              )}
            </Box>
            <Typography variant="h5" color="textSecondary">
              {subtitle}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box marginTop={2}>
              <Grid container spacing={2}>
                {elements && elements.map((element, index) => (
                  <Grid item key={index} xs={12} sm={6}>
                    <ElementLoader element={element} onChange={handleChange} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box marginTop={2}>
              <button onClick={handleCustomSubmit}>Submit</button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StatusForm;
