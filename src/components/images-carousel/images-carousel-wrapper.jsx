import React, { useState, useEffect, useRef } from 'react';
import './images-carousel';
import withDataSource from '../../core/mixins/datasource-mixin';

const ImageCarouselWrapper = ({ element, rows, cols }) => {

  const imageCarouselRef = useRef(null);

  useEffect(() => {
    const imageCarouselElement = imageCarouselRef.current;

    if (imageCarouselElement && element) {
      imageCarouselElement.e = element;
      imageCarouselElement.rows = rows;
      imageCarouselElement.cols = cols;
    }
  }, [element, rows, cols]);

  return (
    <div>
      {element ? (
        <images-carousel id="images-carousel" ref={imageCarouselRef}></images-carousel>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(ImageCarouselWrapper);
