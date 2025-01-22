import React, { useEffect, useRef } from 'react';
import './social-media-points';
import withDataSource from '../../core/mixins/datasource-mixin';


const SocialMediaPointsWrapper = ({ element, data, rows,cols }) => {
  const socialmediapointsRef = useRef(null);
 
  useEffect(() => {
    if (socialmediapointsRef.current && element) {
      socialmediapointsRef.current.e = element;
      socialmediapointsRef.current.data = data;
      socialmediapointsRef.current.rows = rows;
      socialmediapointsRef.current.cols = cols;

    }
  }, [element, data, rows,cols]);

  return (
    <div>
      {element && data && rows ? <social-media-points id="social-media-points" ref={socialmediapointsRef}></social-media-points> : <p>Loading data...</p>}
    </div>
  );
};

export default withDataSource(SocialMediaPointsWrapper);
