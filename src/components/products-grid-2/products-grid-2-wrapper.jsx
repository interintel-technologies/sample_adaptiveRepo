import React, { useEffect, useRef } from 'react';
import './products-grid-2';
import withDataSource from '../../core/mixins/datasource-mixin';


const productsGrid2Wrapper = (props) => {
  const { element, rows,cols,totalPages,isDscLoading,deleteParamKeys,updateParams, paramsCallback } = props;
  const productsGrid2Ref = useRef(null);

  useEffect(() => {
    
    if (productsGrid2Ref.current && element) {
      productsGrid2Ref.current.e = element;
      productsGrid2Ref.current.rows = rows;
      productsGrid2Ref.current.cols = cols;
      productsGrid2Ref.current.totalPages = totalPages
      productsGrid2Ref.current.updateParams = updateParams
      productsGrid2Ref.current.deleteParamKeys = deleteParamKeys
      productsGrid2Ref.current.isDscLoading = isDscLoading
      
      

      

    }
  }, [element, rows, props, paramsCallback]);

  return (
    <div>
     
      {element ? (
        <products-grid-2 id="products-grid-2" ref={productsGrid2Ref}></products-grid-2>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default withDataSource(productsGrid2Wrapper);
