import React, { useEffect, useRef } from 'react';
import './ads-basic';
import withDataSource from '../../core/mixins/datasource-mixin';

const AddBasic = ({ element }) => {
    const adsbasicRef = useRef(null);

    useEffect(() => {
        if (adsbasicRef.current && element) {
            if (adsbasicRef.current.e !== element) {
                adsbasicRef.current.e = element;
            }
        }
    }, [element]);

    return (
        <>
            {element ? (
                <ads-basic id="ads-basic" ref={adsbasicRef}></ads-basic>
            ) : (
                <p>Loading data...</p>
            )}
        </>
    );
};

const AddBasicWrapper =  withDataSource(AddBasic);

export default AddBasicWrapper
