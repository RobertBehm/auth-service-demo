# Auth Server

This project is a basic authentication server built using **Express**, **TypeScript**, and **MongoDB**. It demonstrates core authentication features such as user registration, login, and session management. The server is built for demo purposes and is continuously being improved to showcase my backend development skills, including testing with **Jest** and **Supertest**.

## Features

- **User Registration**: Allows users to create accounts with secure password hashing.
- **User Login**: Implements authentication using **JWT** tokens.
- **Session Management**: Cookie-based session handling for secure authentication.
- **Input Validation**: Utilizes **express-validator** for input validation on registration and login.
- **Error Handling**: Global error handler using **express-async-errors**.
- **Unit & Integration Testing**: Comprehensive testing suite with **Jest** and **Supertest**, using an in-memory MongoDB server for fast and isolated tests.

## Tech Stack

- **Express**: Backend framework for building REST APIs.
- **TypeScript**: For type-safe and maintainable code.
- **MongoDB**: NoSQL database for storing user information, powered by **mongoose**.
- **Jest**: Testing framework with support for **unit** and **integration tests**.
- **Supertest**: For HTTP assertions and testing API endpoints.
- **ts-node-dev**: For running TypeScript in Node.js with hot-reloading during development.
- **mongodb-memory-server**: In-memory database for isolated and fast testing.
