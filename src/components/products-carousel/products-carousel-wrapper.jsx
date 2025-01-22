import React, { useState, useEffect, useRef } from 'react';
import './products-carousel';
import withDataSource from '../../core/mixins/datasource-mixin';

const ProductsCarouselWrapper = ({ element }) => {

  const ProductsCarouselRef = useRef(null);

  useEffect(() => {
    const ProductsCarousel = ProductsCarouselRef.current;

    if (ProductsCarousel && element) {
      ProductsCarousel.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <products-carousel id="products-carousel" ref={ProductsCarouselRef}></products-carousel>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(ProductsCarouselWrapper);
