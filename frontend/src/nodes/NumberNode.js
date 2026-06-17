import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NumberNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.value || 0);
  return (
    <BaseNode id={id} data={data} nodeLabel="Number" outputHandles={[{ id: `${id}-value` }]}>
      <label>
        Value:
        <input type="number" value={value} onChange={e => setValue(Number(e.target.value))} />
      </label>
    </BaseNode>
  );
};