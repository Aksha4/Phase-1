# Week 3 Backend Development Project

## Overview

This project is part of my Backend Development learning journey. It is built using Node.js and Express and demonstrates routing, controllers, environment variables, request logging, and a health check endpoint.

---

## Features

- Express.js web server
- MVC-style folder structure
- Routing using Express Router
- Controllers for request handling
- Environment variables using dotenv
- Request logging middleware
- Health check endpoint
- Basic API endpoints

---

## Project Structure

```
week1-project/
│
├── src/
│   ├── controllers/
│   │   └── mainController.js
│   └── routes/
│       └── mainRoutes.js
│
├── tests/
├── .env
├── app.js
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Aksha4/Phase-1.git
```

Move into the project folder:

```bash
cd Phase-1
```

Install dependencies:

```bash
npm install
```

---

## Run the Application

```bash
node app.js
```

Server runs at:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Home page |
| GET | `/about` | About page |
| GET | `/contact` | Contact page |
| GET | `/health` | Health status |

---

## Environment Variables

Create a `.env` file in the project root.

Example:

```
PORT=3000
APP_NAME=Week1 Backend Project
APP_VERSION=1.0.0
```

---

## Technologies Used

- Node.js
- Express.js
- dotenv
- Git
- GitHub
- Jest

---

## Testing

Run tests using:

```bash
npm test
```

---

## Week 3 Achievements

- Configured dotenv
- Added environment variables
- Implemented request logging middleware
- Created `/health` endpoint
- Successfully tested all routes

---

## GitHub Repository

https://github.com/Aksha4/Phase-1

---

## Author

**Akshay**
