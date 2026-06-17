from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict, Any
from collections import deque
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class Edge(BaseModel):
    source: str
    target: str


class PipelineRequest(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Edge]


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineRequest):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    graph = {}
    in_degree = {}

    for node in pipeline.nodes:
        node_id = node.get('id', '')
        graph[node_id] = []
        in_degree[node_id] = 0

    for edge in pipeline.edges:
        if edge.source not in graph:
            graph[edge.source] = []
        if edge.target not in graph:
            graph[edge.target] = []
        graph[edge.source].append(edge.target)
        in_degree.setdefault(edge.source, 0)
        in_degree[edge.target] = in_degree.get(edge.target, 0) + 1

    queue = deque([n for n in in_degree if in_degree[n] == 0])
    processed = 0

    while queue:
        node = queue.popleft()
        processed += 1
        for neighbor in graph.get(node, []):
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = processed == len(in_degree)

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}
