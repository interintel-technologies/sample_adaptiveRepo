import React from "react";
import Slider from "react-slick";
import withDataSource from "../../core/mixins/datasource-mixin";
import "./manual-slideshow"; // Assuming this is your CSS or relevant module import

const ManualSlideshow = ({rows }) => {

  
  // Default settings for the react-slick Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
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

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {rows && rows.length > 0 ? (
          rows.map((slide, index) => (
            <div key={index} className="slide">
              <h3>{slide[1]}</h3>
              <img src={`${slide[3]}`} alt={slide[1]} className="slide-image" />
              <div className="captions">
                {slide[2] && (
                  <div>
                    <h4>{slide[2]}</h4>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>
            <h3>No slides available</h3>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default withDataSource(ManualSlideshow);
