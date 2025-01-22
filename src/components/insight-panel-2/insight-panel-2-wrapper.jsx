import React, { useEffect, useRef } from 'react';
import './insight-panel-2';
import withDataSource from '../../core/mixins/datasource-mixin';

const InsightPanel2Wrapper = ({ element, rows, cols }) => {
    const inforCTARef = useRef(null);

    useEffect(() => {
        if (inforCTARef.current) {
            inforCTARef.current.rows = rows;
            inforCTARef.current.cols = cols;
        }
    }, [rows, cols]);

    return (
        <div>
            <insight-panel-2 ref={inforCTARef}></insight-panel-2>
        </div>
    );
};

export default withDataSource(InsightPanel2Wrapper);
