import React, { useEffect, useRef } from "react";
import './top-selling-products';
import withDataSource from "../../core/mixins/datasource-mixin";

const TopSellingProductsWrapper = ({ data,cols,rows,element }) => {

    const topSellingProductsRef = useRef();

    useEffect(() => {
      if (topSellingProductsRef.current) {
        
          topSellingProductsRef.current.data = data;
          topSellingProductsRef.current.e = element;
          topSellingProductsRef.current.cols = cols;
          topSellingProductsRef.current.rows = rows;
      } else {
          console.log("topSellingProductsRef.current is not set");
      }
  }, [data, cols, rows, element]);
  
  

    return (
      <>
          {element ? <top-selling-products ref={topSellingProductsRef}></top-selling-products> : <p>Loading data...</p>}
      </>
  );
  
};

export default withDataSource(TopSellingProductsWrapper);
