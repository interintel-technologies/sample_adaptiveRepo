import React, { useState, useEffect, useRef } from 'react';
import './product-meta-view';
import withDataSource from '../../core/mixins/datasource-mixin';

const ProductMetaViewWrapper = ({ element }) => {

  const ProductMetaViewRef = useRef(null);

  useEffect(() => {
    const ProductMetaView = ProductMetaViewRef.current;

    if (ProductMetaView && element) {
      ProductMetaView.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <product-meta-view id="product-meta-view" ref={ProductMetaViewRef}></product-meta-view>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default withDataSource(ProductMetaViewWrapper);
