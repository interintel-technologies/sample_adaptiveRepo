import React, { useEffect, useRef } from 'react';
import './comment-box';

const CommentBoxWrapper = ({ element }) => {
  const commentBoxRef = useRef(null);

  useEffect(() => {
    if (commentBoxRef.current && element) {
      commentBoxRef.current.e = element;
    }
  }, [element]);

  return (
    <>
      {element ? (
        <comment-box id="comment-box" ref={commentBoxRef}></comment-box>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default CommentBoxWrapper;
