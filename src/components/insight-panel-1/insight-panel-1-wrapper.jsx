import React, { useEffect, useRef } from 'react';
import './insight-panel-1';
import withAdaptiveUI from '../../core/mixins/adaptiveui-mixin';

const InsightPanel1Wrapper = ({ element, gatewayData, rows, cols }) => {
    const inforCTARef = useRef(null);

    useEffect(() => {
        if (inforCTARef.current) {
            inforCTARef.current.rows = rows || [];
            inforCTARef.current.cols = cols || [];
            inforCTARef.current.gateway = gatewayData?._response || {};
        }
    }, [gatewayData, rows, cols]);

    return (
        <div>
            <insight-panel-1 ref={inforCTARef}></insight-panel-1>
        </div>
    );
};

export default withAdaptiveUI(InsightPanel1Wrapper);
