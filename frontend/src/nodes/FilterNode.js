import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'contains');
  return (
    <BaseNode
      id={id}
      data={data}
      nodeLabel="Filter"
      inputHandles={[{ id: `${id}-input` }]}
      outputHandles={[{ id: `${id}-output` }]}
    >
      <label>
        Condition:
        <select value={condition} onChange={e => setCondition(e.target.value)}>
          <option value="contains">Contains</option>
          <option value="equals">Equals</option>
          <option value="starts_with">Starts With</option>
          <option value="greater_than">Greater Than</option>
          <option value="less_than">Less Than</option>
        </select>
      </label>
    </BaseNode>
  );
};