import React, { useEffect, useState } from 'react';
import withDataSource from '../../core/mixins/datasource-mixin';
import Slider from 'react-slick';
import { Box, Typography, Zoom , Grid, Paper, useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlobCarouselWrapper = ({ element, rows, cols }) => {
  const [boxes, setBoxes] = useState([]);
  const [slider, setSlider] = useState(null);
  const isMobile = useMediaQuery('(max-width: 1024px)'); // Define breakpoint for mobile
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checked, setChecked] = useState(true);


  useEffect(() => {
    // Convert rows to objects with corresponding column labels as keys
    const newBoxes = rows.map(row =>
      Object.fromEntries(row.map((rowValue, index) => [cols[index].label, rowValue]))
    );
    setBoxes(newBoxes);
  }, [element, rows, cols]);

  const totalItems = boxes.length;
  const extendedBoxes = [...boxes, ...boxes, ...boxes]; // Duplicate items for infinite effect

  const handleResize = () => {
    // Adjust itemsPerSlide based on the screen width
    if (!isMobile) {
      setCurrentIndex(Math.max(0, Math.min(currentIndex, Math.floor(totalItems / itemsPerSlide) - 1)));
    }
  };
  


  const updateItemsPerView = () => {
    const width = window.innerWidth;
    const itemsPerSlide = width >= 1024 ? 3 : 1; // Adjust based on screen width
    return itemsPerSlide;
  };

  const itemsPerSlide = updateItemsPerView();

  const nextItemGrid = () => {
    setChecked(false); // Hide zoom before changing the slide
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (boxes.length/3));
      setChecked(true); // Show zoom after the slide change
    }, 300); // Adjust delay to match the zoom effect duration
  };

  const prevItemGrid = () => {
    setChecked(false); // Hide zoom before changing the slide
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + boxes.length) % (boxes.length/3));
      setChecked(true); // Show zoom after the slide change
    }, 300); // Adjust delay to match the zoom effect duration
  };

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 500,
    arrows: false, // Hide default arrows
    dots: false,
    responsive: [
      {
        breakpoint: 1771,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '10px',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % boxes.length);
    slider?.slickNext();
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % boxes.length);

    slider?.slickPrev();
  };

  const renderDots = () => {
    const numDots = Math.min(3, Math.ceil(totalItems / itemsPerSlide)); // Calculate the number of dots to render

    return (
      <Box className="dot-container">
        {Array.from({ length: numDots }).map((_, index) => (
          <Box
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? 'primary.main' : 'transparent',
              border: `2px solid ${index === currentIndex ? 'transparent' : '#000'}`,
              margin: 1,
              cursor: 'pointer',
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    );
  };

  const renderDesktopDots = () => {
    // Calculate total number of dot groups based on totalItems and itemsPerSlide
    const totalDots = Math.ceil(totalItems / 3);
    console.log("total dots ",totalDots,totalItems,currentIndex);
    
    return (
      <Box className="dot-container" sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        {Array.from({ length: totalDots }).map((_, dotIndex) => (
          <Box
            key={dotIndex}
            className={`dot ${dotIndex === currentIndex ? 'active' : ''}`}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: dotIndex === Math.floor(currentIndex) ? 'primary.main' : 'transparent',
              border: `2px solid ${dotIndex === Math.floor(currentIndex) ? 'transparent' : '#000'}`,
              margin: 1,
              cursor: 'pointer',
            }}
            
            onClick={() => setCurrentIndex(dotIndex * 3)} // Update currentIndex based on slide groups
          />
        ))}
      </Box>
    );
  };
  
 
  

  
  const renderDesktopCarousel = () => {
    // Calculate the display range based on the current index and itemsPerSlide
    const startIndex = currentIndex * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide * 3; // Show three slides
    const visibleItems = extendedBoxes.slice(startIndex, endIndex);

    return (
      <Grid container spacing={2} justifyContent="center" >
       {visibleItems.slice(0, itemsPerSlide).map((slide, index) => (
           <Zoom in={checked} timeout={300} key={index}>
          <Grid item xs={12} md={4} key={index} >
             <Paper
              className={`top-paper ${index === 1 ? 'primaryBg' : ''}`}
              sx={{ padding: 2 }}
            >
              <Grid container spacing={2} alignItems="center">
                {/* Description Column */}
                <Grid item xs={10}>
                  <Typography variant="body1">{slide.name}</Typography>
                  <Typography variant="body2" className="body2">
                    {slide.description}
                  </Typography>
                </Grid>

                {/* Circle Column */}
                <Grid item xs={2} display="flex" style={{ height: '100%' }} justifyContent="center">
                  <Box
                    className="circle"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: '#f0f0f0',
                    }}
                  >
                    <i  className={slide.icon}></i>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          </Zoom>
        ))}
      </Grid>
    );
  };

  return (
    <div className="blob-carousel-wrapper">
      {isMobile ? (
        <Slider {...settings} ref={c => setSlider(c)}>
          {boxes.map((slide, index) => (
            <div key={index} style={{ width: 5000 }}>
              <Paper elevation={3} className={`top-paper mx-2`} sx={{ padding: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  {/* Description Column */}
                  <Grid item xs={10}>
                    <Typography variant="body1">{slide.name}</Typography>
                    <Typography variant="body2"  className="truncate-text slide-description">
                      {slide.description}
                    </Typography>
                  </Grid>

                  {/* Circle Column */}
                  <Grid item xs={2} display="flex" style={{ height: "100%" }} justifyContent="center">
                    <Box
                      className="circle"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        backgroundColor: '#f0f0f0',
                      }}
                    >
                      <i className={slide.icon}></i>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          ))}
        </Slider>
      ) : (
        <>
        {renderDesktopCarousel()}
        {/* Navigation Controls for Desktop */}
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <span
            onClick={prevItemGrid}
            className='navigation-btn'
          >
            <ArrowBackIosIcon style={{ width: '12px', height: '12px',color:"var(--md-sys-color-onPrimaryContainer) !important",position:"relative",left:"35%" }} />
          </span>

          {renderDesktopDots()}

          <span
            onClick={nextItemGrid}
            className='navigation-btn'
          >
            <ArrowForwardIosIcon style={{ width: '12px', height: '12px',color:"var(--md-sys-color-onPrimaryContainer) !important",position:"relative",left:"35%"  }} />
          </span>
        </Box>
      </>
      )}

      {/* Navigation Controls for Slider */}
      {isMobile && (
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <span
            onClick={prevItem}
            className='navigation-btn'
          >
            <ArrowBackIosIcon style={{ width: "12px", height: "12px" }} />
          </span>

          {renderDots()}

          <span
            onClick={nextItem}
            className='navigation-btn'
          >
            <ArrowForwardIosIcon style={{ width: "12px", height: "12px" }} />
          </span>
        </Box>
      )}
    </div>
  );
};

export default withDataSource(BlobCarouselWrapper);
