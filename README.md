# PCNstatus

Full stack application with React/Vite frontend and Node.js/Express backend.

## Project Structure

```
PCNstatus/
├── client/          # React + Vite frontend
├── server/          # Node.js + Express backend
└── package.json     # Root package.json for running both apps
```

## Prerequisites

- Node.js (v18 or higher recommended)
- npm

## Installation

### Install all dependencies

```bash
npm run install:all
```

Or install dependencies separately:

```bash
# Install root dependencies
npm install

# Install client dependencies
npm run install:client

# Install server dependencies
npm run install:server
```

## Development

### Run both frontend and backend concurrently

```bash
npm run dev
```

### Run frontend only

```bash
npm run client
```

### Run backend only

```bash
npm run server
```

The frontend will be available at `http://localhost:5173`  
The backend will be available at `http://localhost:5000`

## Production

### Build the frontend

```bash
npm run build
```

The built files will be in the `client/dist` directory.

### Run the backend in production

```bash
cd server
npm start
```

## Environment Variables

### Backend (server/.env)

Create a `.env` file in the `server` directory based on `.env.example`:

```
PORT=5000
NODE_ENV=development
```

### Frontend (client/.env)

Create a `.env` file in the `client` directory based on `.env.example`:

```
VITE_API_URL=http://localhost:5000
```

This allows you to configure the API URL for different environments (development, staging, production).

## Tech Stack

### Frontend
- React
- Vite
- JavaScript

### Backend
- Node.js
- Express
- CORS
- dotenv
