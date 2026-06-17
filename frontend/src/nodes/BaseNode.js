import { Handle, Position } from 'reactflow';

export const BaseNode = ({id, data, nodeLabel, children, inputHandles= [], outputHandles= [] }) => {
    return (
        <div className='base-node'>
            <div className="base-node-header">
                <span>{nodeLabel}</span>
            </div>
            <div className="base-node-body">
                {children}
            </div>
            {inputHandles.map((handle, index) => (
                <Handle 
                    key = {handle.id}
                    type = "target"
                    position = {handle.position || Position.Left}
                    id = {handle.id || `${id}-input-${index}`}
                    style = {handle.style || {top: `${(index + 1) * 100 / (inputHandles.length + 1)}%` }}
                    />
            ))}
            {outputHandles.map((handle, index) => (
                <Handle 
                    key = {handle.id}
                    type = "source"
                    position = {handle.position || Position.Right}
                    id = {handle.id || `${id}-output-${index}`}
                    style = {handle.style || {top: `${(index + 1) * 100 / (outputHandles.length + 1)}%` }}
                    />
            ))}
        </div>
    );
};
