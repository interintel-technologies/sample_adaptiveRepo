import React, { useEffect, useRef } from "react";
import './product-list';
import withDataSource from "../../core/mixins/datasource-mixin";
import {  Card, CardContent } from "@mui/material";

const ProductListWrapper = ({ data,element }) => {

    const gridRef = useRef();

    useEffect(() => {
        if (gridRef.current && data) {
            gridRef.current.data = data;
            gridRef.current.element = element
        }
    }, [data]);

    return (
        <>
        {data ? <product-list ref={gridRef}></product-list> : <p>Loading data...</p>}
        </>
       
    );
};

export default withDataSource(ProductListWrapper);
