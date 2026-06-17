import { InputNode } from './nodes/InputNode';
import { LLmNode } from './nodes/LLmNode';
import { OutputNode } from './nodes/OutputNode';
import { TextNode } from './nodes/TextNode';
import { FileNode } from './nodes/FileNode';
import { NumberNode } from './nodes/NumberNode';
import { FilterNode } from './nodes/FilterNode';
import { MergeNode } from './nodes/MergeNode';
import { TransformNode } from './nodes/TransformerNode';

export const nodeTypes = {
  customInput: InputNode,
  llm: LLmNode,
  customOutput: OutputNode,
  text: TextNode,
  file: FileNode,
  number: NumberNode,
  filter: FilterNode,
  merge: MergeNode,
  transform: TransformNode,
};
