import React, { useEffect, useRef } from 'react';
import './live-chat-2';


const liveChat2Wrapper = (props) => {
  const { element } = props;

  
  const listElement5Ref = useRef(null);

  useEffect(() => {
    
    if (listElement5Ref.current && element) {
      listElement5Ref.current.e = element;


    }
  }, [element]);

  return (
    <div>
     
      {element ? (
        <live-chat-2 id="live-chat-2" ref={listElement5Ref}></live-chat-2>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default liveChat2Wrapper;

