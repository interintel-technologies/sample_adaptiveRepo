import React, { useEffect, useRef } from 'react';
import './rich-text-editor'; // Import your LitElement component

const RichTextEditorWrapper = ({ element }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && element) {
      editorRef.current.e = element;
      console.log("Passed 'element' to LitElement:", element);
    }
  }, [element]);

  return (
    <>
      {element && <rich-text-editor ref={editorRef}></rich-text-editor>}
    </>
  );
};

export default RichTextEditorWrapper;
