"use client";
import { useState } from "react";
import Editor from "./QuillEditor";

type Operator = string[][];

const CUSTOM_OPERATORS = [
  ["x^{2}", "x^{}"],
  ["\\pm", "\\pm"],
  ["\\sqrt{x}", "\\sqrt"],
  ["\\sqrt[3]{x}", "\\sqrt[3]{}"],
  ["\\sqrt[n]{x}", "\\nthroot"],
  ["\\frac{x}{y}", "\\frac"],
  ["\\sum^{s}_{x}{d}", "\\sum"],
  ["\\prod^{s}_{x}{d}", "\\prod"],
  ["\\coprod^{s}_{x}{d}", "\\coprod"],
  ["\\int^{s}_{x}{d}", "\\int"],
  ["\\binom{n}{k}", "\\binom"],
  ["\\lim_{x \\to a}", "\\lim_{x \\to }"],
  ["\\lim_{x \\to 0}", "\\lim_{x \\to }"],
  ["\\lim_{x \\to \\infty}", "\\lim_{x \\to \\infty}"],
  ["\\limsup", "\\limsup"],
  ["\\liminf", "\\liminf"],
];

export default function FormulaEditor() {
  const [operators, setOperators] = useState<Operator>([]);
  const [displayHistory, setDisplayHistory] = useState(false);
  const [value, setValue] = useState<string>("");

  const toggleDisplayHistory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayHistory(event.target.checked);
  };

  const toggleOperators = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOperators(event.target.checked ? CUSTOM_OPERATORS : []);
  };

  const options = { displayHistory, operators };

  return (
    <div>
      <Editor
        value={value}
        setValue={setValue}
        options={options}
        key={JSON.stringify(options)}
      />

      <label>
        Use custom operator buttons:
        <input type="checkbox" className="option" onChange={toggleOperators} />
      </label>

      <label>
        Display formula history:
        <input
          type="checkbox"
          className="option"
          onChange={toggleDisplayHistory}
        />
      </label>
      <div dangerouslySetInnerHTML={{ __html: value ?? "" }} />
    </div>
  );
}
