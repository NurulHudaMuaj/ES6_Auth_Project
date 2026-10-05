import express from 'express';
import authRoute from './route/authRoute.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        timestamp: new Date().toISOString()
    });
});

app.use('/api/auth', authRoute);

// 404 Route Handler
app.use((req, res, next) => {
    const error = new Error(`Route ${req.method} ${req.originalUrl} not found`);
    error.statusCode = 404;
    next(error);
});

// Global Error Handler
app.use(errorHandler);

export default app;