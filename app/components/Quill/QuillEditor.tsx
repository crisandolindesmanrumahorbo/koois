"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useRef, useEffect } from "react";
import $ from "jquery";
import katex from "katex";
import ReactQuill, { Quill } from "react-quill-new";

// Only load browser-specific libraries when window is available
if (typeof window !== "undefined") {
  (window as any).katex = katex;
  (window as any).jQuery = (window as any).$ = $;
  (window as any).mathquill4quill = require("mathquill4quill");
  require("@edtr-io/mathquill/build/mathquill.js");
}

// Props type definition
interface QuillEditorProps {
  value: string;
  setValue: (value: string) => void;
  options?: Record<string, any>;
}

const QuillEditor: React.FC<QuillEditorProps> = (props) => {
  const reactQuill = useRef<ReactQuill | null>(null);
  const didAttachQuillRefs = useRef(false);

  const handleEditorChange = (html: string) => {
    props.setValue(html);
  };

  useEffect(() => {
    const attachQuillRefs = () => {
      const enableMathQuillFormulaAuthoring = (window as any).mathquill4quill({
        Quill,
        katex,
      });
      if (reactQuill.current) {
        enableMathQuillFormulaAuthoring(
          reactQuill.current.editor,
          props.options,
        );
      }
    };
    if (!didAttachQuillRefs.current) {
      attachQuillRefs();
      didAttachQuillRefs.current = true;
    }
  }, [props.options]);

  return (
    <ReactQuill
      ref={reactQuill}
      value={props.value}
      onChange={handleEditorChange}
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["formula"],
        ],
      }}
    />
  );
};

export default QuillEditor;
