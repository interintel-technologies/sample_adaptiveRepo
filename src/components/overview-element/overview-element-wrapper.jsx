import React, { useEffect, useRef } from 'react';
import './overview-element';

const OverViewELementWrapper = ({ element }) => {
    const overviewElementRef = useRef(null);

    useEffect(() => {
        if (overviewElementRef.current && element) {
            if (overviewElementRef.current.e !== element) {
                overviewElementRef.current.e = element;
            }
        }
    }, [element]);

    return (
        <>
            {element ? (
                <overview-element id="overview-element" ref={overviewElementRef}></overview-element>
            ) : (
                <p>Loading data...</p>
            )}
        </>
    );
};

export default OverViewELementWrapper;
