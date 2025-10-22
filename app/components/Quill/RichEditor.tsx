import dynamic from "next/dynamic";
import React from "react";

const QuillEditor = dynamic(
  () => import("./QuillEditor").then((mod) => mod.default),
  { ssr: false, loading: () => <p>Editor loading ...</p> },
);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Editor = (props: any) => {
  return <QuillEditor {...props} />;
};

export default Editor;
