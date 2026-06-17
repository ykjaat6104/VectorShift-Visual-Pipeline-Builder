// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges
    }));

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges }),
            });

            const data = await response.json();
            alert(
                `Pipeline parsed successfully!\n` +
                `Number of nodes: ${data.num_nodes}\n` +
                `Number of edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag}`
            );
        } catch (error) {
            alert('Error submitting pipeline: ' + error.message);
        }
    };

    return (
        <div className="submit-wrapper">
            <button className="submit-button" type="button" onClick={handleSubmit}>Submit</button>
        </div>
    );
}
