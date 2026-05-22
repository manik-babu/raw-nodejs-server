# Raw Node.js Server

A lightweight, custom-built HTTP server written in TypeScript from scratch, without relying on external frameworks like Express. This project demonstrates core Node.js concepts including raw HTTP handling, routing, request parsing, and response management.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Development](#development)
- [License](#license)

## ✨ Features

- **Custom Routing Engine** - Route matching with support for both static and dynamic paths
- **Dynamic Path Parameters** - Extract parameters from URL paths (e.g., `/api/user/:id`)
- **Request Body Parsing** - Parse JSON request bodies with error handling
- **HTTP Method Support** - GET, POST, and other HTTP methods
- **JSON Responses** - Consistent JSON response formatting with status codes
- **Type-Safe** - Full TypeScript support for robust code
- **Environment Configuration** - Configurable port via `.env` file
- **Development Mode** - Hot reload support with ts-node-dev

## 📁 Project Structure

```
raw-nodejs-server/
├── src/
│   ├── config/
│   │   └── index.ts              # Configuration management
│   ├── data/
│   │   └── users.json            # User data storage
│   ├── helper/
│   │   ├── manageDb.ts           # Database management utilities
│   │   ├── parseBody.ts          # Request body parsing
│   │   ├── routeHandler.ts       # Routing logic and registration
│   │   └── sendResponse.ts       # Standardized response sender
│   ├── routes/
│   │   └── index.ts              # Route definitions
│   └── server.ts                 # Main server entry point
├── .env                          # Environment variables
├── .gitignore                    # Git ignore rules
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the project root:
   ```env
   PORT=3000
   ```

## 🏃 Getting Started

### Development Mode

Start the server with hot reload:

```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in `.env`).

### Build

Compile TypeScript to JavaScript:

```bash
npm run build
```

This generates a `dist` folder with compiled code.

## 📡 API Endpoints

### Test Endpoint

- **GET** `/api/test-route`
  ```json
  Response: { "message": "I made it!" }
  ```

### Authentication

- **POST** `/api/signup`
  ```
  Body: { "username": "user", "password": "pass" }
  Response: { "message": "Account created successfully!", "user": {...} }
  ```

- **POST** `/api/login`
  ```
  Body: { "username": "user", "password": "pass" }
  Response: { "success": true, "message": "Login successful", "data": {...} }
  ```

### Dynamic Routes

- **GET** `/api/user/:id`
  ```
  Response: { "message": { "id": "123" } }
  ```

## ⚙️ Configuration

The server uses environment variables for configuration. Create a `.env` file in the project root:

```env
PORT=3000
```

**Available variables:**
- `PORT` - Server port (default: 3000)

## 🔧 Development

### Project Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Compile TypeScript to JavaScript
npm test         # Run tests (not yet configured)
```

### How It Works

1. **Server (`src/server.ts`)** - Creates an HTTP server and handles incoming requests
2. **Router (`src/helper/routeHandler.ts`)** - Matches requests to registered handlers
3. **Routes (`src/routes/index.ts`)** - Defines application routes
4. **Middleware** - Helper functions for parsing bodies and sending responses
5. **Configuration** - Environment-based settings via `dotenv`

### Adding New Routes

In `src/routes/index.ts`:

```typescript
import addRoute from '../helper/routeHandler';

addRoute('GET', '/api/new-endpoint', (req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello!' }));
});
```

## 📄 License

ISC

---

**Developed as a learning project for understanding raw Node.js HTTP server fundamentals.**
