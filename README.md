# Phase-1 Backend Project

A beginner-friendly backend project built using Node.js and Express.js as part of the Data Analysis / Backend Development training program.

## Features

- Express.js web server
- Modular routing
- Controller-based architecture
- REST API endpoints
- Jest unit testing
- Git version control

## Project Structure

```text
Phase-1/
│
├── app.js
├── package.json
├── package-lock.json
├── README.md
│
├── src/
│   ├── controllers/
│   │   └── mainController.js
│   │
│   └── routes/
│       └── mainRoutes.js
│
├── tests/
│   └── app.test.js
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/Aksha4/Phase-1.git
```

2. Navigate to the project folder

```bash
cd Phase-1
```

3. Install dependencies

```bash
npm install
```

## Running the Application

Start the server:

```bash
node app.js
```

The application will run on:

```text
http://localhost:3000
```

## Available Endpoints

### Home

```http
GET /
```

Response:

```json
{
  "message": "Week 2 API is running!"
}
```

### About

```http
GET /about
```

Response:

```json
{
  "name": "Akshay",
  "course": "Backend Development"
}
```

### Contact

```http
GET /contact
```

Response:

```json
{
  "email": "akshay@example.com",
  "phone": "1234567890"
}
```

## Running Tests

Execute Jest tests:

```bash
npm test
```

Expected output:

```text
PASS tests/app.test.js
```

## Technologies Used

- Node.js
- Express.js
- Git
- GitHub
- Jest

## Author

Akshay

## GitHub Repository

https://github.com/Aksha4/Phase-1
