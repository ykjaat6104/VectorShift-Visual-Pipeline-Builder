// textNode.js

import { useState, useRef, useEffect } from 'react';
import { BaseNode } from './BaseNode';

const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

const extractVariables = (text) => {
  const matches = [];
  let match;
  while ((match = variableRegex.exec(text)) !== null) {
    matches.push(match[1]);
  }
  return [...new Set(matches)];
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Adding: extract variables and build dynamic input handles
  const variables = extractVariables(currText);
  const inputHandles = variables.map((varName, index) => ({
    id: `${id}-${varName}`,
    style: { top: `${(index + 1) * 100 / (variables.length + 1)}%` }
  }));

  return (
    <BaseNode
      id={id}
      data={data}
      nodeLabel="Text"
      inputHandles={inputHandles}
      outputHandles={[{ id: `${id}-output` }]}
    >
      <label>Text: <textarea ref={textareaRef} value={currText} onChange={handleTextChange} rows={1} style={ {resize: 'none', overflow: 'hidden', width: '100%'}} />
      </label>
    </BaseNode>
  );
}
