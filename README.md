# Express ES6 JWT Authentication API

A robust, production-ready RESTful API boilerplate demonstrating a clean **Layered Architecture (Controller-Service-Repository pattern)** using Node.js, Express, and ES6 Modules.

## 🚀 Features

- **Modern JavaScript:** Built using ES6 Modules (`import`/`export`).
- **Clean Architecture:** Separation of concerns using Route, Controller, Service, and Repository layers.
- **Secure Authentication:** JSON Web Token (JWT) based authentication.
- **Password Protection:** Password hashing using `bcryptjs`.
- **Global Error Handling:** Centralized error handling and 404 route protection.
- **Mock Database:** Uses a static array-based repository (easily replaceable with MongoDB/MySQL).

## 🛠️ Tech Stack

- **Node.js** & **Express.js** (Web Framework)
- **JSON Web Token (jsonwebtoken)** (Authentication)
- **Bcrypt.js** (Password Hashing)
- **Dotenv** (Environment Variables)
- **Nodemon** (Development Tool)

## 📁 Folder Structure

```text
ES6_Project/
├── src/
│   ├── controller/      # Handles HTTP requests & responses
│   ├── middleware/      # Custom middlewares (auth, error handling)
│   ├── repositories/    # Database logic / Mock static data
│   ├── route/           # API route definitions
│   ├── services/        # Core business logic
│   ├── utils/           # Helper functions (JWT generator/verifier)
│   └── app.js           # Express app configuration
├── .env                 # Environment variables (Ignored in Git)
├── .env.example         # Example environment variables
├── .gitignore           # Git ignore rules
├── package.json         # Project metadata and scripts
└── server.js            # Main application entry point
