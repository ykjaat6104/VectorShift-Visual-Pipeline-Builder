# Visual Pipeline Builder

A drag-and-drop pipeline builder built with React Flow + FastAPI.

## Tech Stack

- **Frontend:** React 18, ReactFlow 11, Zustand
- **Backend:** Python 3, FastAPI, Pydantic
- **Styling:** Plain CSS with custom properties (dark theme)

## Features

- 9 draggable node types (Input, Output, Text, LLM, File, Number, Filter, Merge, Transform)
- Reusable BaseNode abstraction for all node components
- Dynamic Text node with auto-resize and `{{variable}}` handle generation
- DAG validation via Kahn's algorithm on backend submit

## Quick Start

```bash
# Backend
cd backend
source venv/bin/activate
uvicorn main:app --reload

# Frontend (separate terminal)
cd frontend
npm install
npm start
```

Open `http://localhost:3000`.

## API

**`POST /pipelines/parse`**
```json
// Request: { nodes: [...], edges: [...] }
// Response: { num_nodes: int, num_edges: int, is_dag: bool }
```
