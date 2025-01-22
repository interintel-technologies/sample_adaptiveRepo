import React, { useEffect, useRef } from "react";
import './top-selling-items';
import withDataSource from "../../core/mixins/datasource-mixin";

const TopSellingItemsWrapper = ({ data,cols,rows,element }) => {

    const topSellingItemsRef = useRef();

    useEffect(() => {
      if (topSellingItemsRef.current) {
        
          topSellingItemsRef.current.data = data;
          topSellingItemsRef.current.e = element;
          topSellingItemsRef.current.cols = cols;
          topSellingItemsRef.current.rows = rows;
      } else {
          console.log("topSellingItemsRef.current is not set");
      }
  }, [data, cols, rows, element]);
  
  

    return (
      <>
          {element ? <top-selling-items ref={topSellingItemsRef}></top-selling-items> : <p>Loading data...</p>}
      </>
  );
  
};

export default withDataSource(TopSellingItemsWrapper);
