import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [Operation, setOperation] = useState(data?.Operation || 'uppercase');
  return (
    <BaseNode
      id={id}
      data={data}
      nodeLabel="Transform"
      inputHandles={[{ id: `${id}-input` }]}
      outputHandles={[{ id: `${id}-output` }]}
    >
      <label>
        Operation:
        <select value={Operation} onChange={e => setOperation(e.target.value)}>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="trim">Trim</option>
          <option value="reverse">Reverse</option>
        </select>
      </label>
    </BaseNode>
  );
};