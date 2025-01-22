import React, { useEffect, useRef } from 'react';
import './youtube-embed-element';



const YoutubeEmbedElementWrapper = ({ element }) => {
  const youtubeEmbedElementRef3 = useRef(null);

  useEffect(() => {
    if (youtubeEmbedElementRef3.current && element) {
      youtubeEmbedElementRef3.current.e = element;
    }
  }, [element]);

  return (
    <div>
      {element ? <youtube-embed-element id="youtube-embed-element" ref={youtubeEmbedElementRef3}></youtube-embed-element> : <p>Loading data...</p>}
    </div>
  );
};

export default YoutubeEmbedElementWrapper;
