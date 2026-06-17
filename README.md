# Visual Pipeline Builder-Vector

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



## Demo
<img width="1920" height="1080" alt="Screenshot From 2026-06-17 10-59-12" src="https://github.com/user-attachments/assets/a649976a-933b-4dd5-9cf6-366ed490b3dc" />
<img width="582" height="383" alt="Screenshot From 2026-06-17 10-59-41" src="https://github.com/user-attachments/assets/4be6563b-15d3-4619-89a8-0cdae652356a" />

## Project Structure

```
├── frontend/
│   └── src/
│       ├── nodes/          # 9 node components + BaseNode wrapper
│       ├── nodetypes.js    # Node type registry
│       ├── ui.js           # React Flow canvas
│       ├── toolbar.js      # Draggable toolbar
│       ├── submit.js       # Backend submission handler
│       ├── store.js        # Zustand state management
│       ├── App.js          # Root component
│       └── index.css       # Global styles + design tokens
├── backend/
│   └── main.py             # FastAPI server + DAG validation
├── .gitignore
├── README.md
└── PLAN.md
```

## API

**`POST /pipelines/parse`**
```json
// Request: { nodes: [...], edges: [...] }
// Response: { num_nodes: int, num_edges: int, is_dag: bool }
```
