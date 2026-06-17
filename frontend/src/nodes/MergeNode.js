import { BaseNode } from './BaseNode'; 

export const MergeNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      nodeLabel="Merge"
      inputHandles={[
        { id: `${id}-input-1` },
        { id: `${id}-input-2` },
      ]}
      outputHandles={[{ id: `${id}-output` }]}
    >
      <span>Merge two inputs</span>
    </BaseNode>
  );
};