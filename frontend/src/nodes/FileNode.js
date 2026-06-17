import {useState} from 'react';
import { BaseNode} from './BaseNode';

export const FileNode = ({id, data}) => {
    const [filename, setFilename] = useState(data?.filename || '');

    return (
        <BaseNode id = {id} data = {data} nodeLabel="File" outputHandles={[{ id: `${id}-file`}]}>
            <label> File <input type= "file" onChange={e => setFilename(e.target.files[0]?.name || '' )} /> </label>
            {filename && <p>{filename}</p>}
        </BaseNode>
    );
};