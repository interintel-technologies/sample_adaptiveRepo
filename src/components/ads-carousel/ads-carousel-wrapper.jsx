import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Paper, CircularProgress } from '@mui/material';
import withDataSource from '../../core/mixins/datasource-mixin';

  const useStyles = makeStyles((theme) => ({
    carouselWrapper: {
      display: 'flex',
      transition: 'transform 0.5s ease-in-out',
      width: '100%',
    },
    carouselItem: {
      flex: '0 0 100%',
      boxSizing: 'border-box',
    },
    dotsContainer: {
      textAlign: 'center',
      marginTop: window.theme_loaded.spacing(2),
    },
    dot: {
      height: 10,
      width: 10,
      margin: '0 2px',
      backgroundColor: '#bbb',
      borderRadius: '50%',
      display: 'inline-block',
      '&.active': {
        backgroundColor: window.theme_loaded.palette.primary.main,
      },
    },
    nav: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 24,
      color: '#fff',
      padding: window.theme_loaded.spacing(1),
      '&:hover': {
        color: window.theme_loaded.palette.primary.main,
      },
    },
  }));


const AdsCarousel = ({ rows, cols, autoPlayInterval = 10000 }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [slideIndex, setSlideIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);



  
  const getEntries = (text) => {
    return text.split('|');
  };

  const showSlide = useCallback((index) => {
    if (index >= slides.length) {
      setSlideIndex(0);
    } else if (index < 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(index);
    }
  }, [slides.length]);

  const startAutoPlay = useCallback(() => {
    const intervalId = setInterval(() => showSlide(slideIndex + 1), autoPlayInterval);
    return () => clearInterval(intervalId);
  }, [slideIndex, showSlide, autoPlayInterval]);

  useEffect(() => {
    console.log("rows are ",rows);
    
    if (rows && rows.length) {
      setSlides(rows.map(row => (
        <Paper key={row[0]} className={classes.carouselItem}>
          <Box display="flex" justifyContent="center" alignItems="center" p={2}>
            <Typography variant="h3">{getEntries(row[1])[0]}</Typography>
            <Typography variant="h4">{getEntries(row[1])[1]}</Typography>
          </Box>
          <Box textAlign="center">
            <img src={`/media/${row[2]}`} alt={`${getEntries(row[1])[0]} Image`} width="100%" />
          </Box>
        </Paper>
      )));
      setLoading(false);
    }
  }, [rows, classes]);

  useEffect(() => {
    const cleanup = startAutoPlay();
    return () => cleanup();
  }, [startAutoPlay]);

  return (
    <Box position="relative" overflow="hidden">
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Box className={classes.carouselWrapper} style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
            {slides}
          </Box>
          <Box className={classes.dotsContainer}>
            {slides.map((_, index) => (
              <span
                key={index}
                className={`${classes.dot} ${index === slideIndex ? 'active' : ''}`}
                onClick={() => showSlide(index)}
              />
            ))}
          </Box>
          <IconButton
            className={classes.nav}
            style={{ left: 10 }}
            onClick={() => showSlide(slideIndex - 1)}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            className={classes.nav}
            style={{ right: 10 }}
            onClick={() => showSlide(slideIndex + 1)}
          >
            <ChevronRightIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default withDataSource(AdsCarousel);
