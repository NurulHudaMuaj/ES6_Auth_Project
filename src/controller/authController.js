import * as authService from '../services/authService.js';

export const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const result = await authService.login({ username, password });
        
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        next(error);
    }
};

export const getProfile = async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: {
                user: req.user
            }
        });
    } catch (error) {
        next(error);
    }
};

export const getDashboard = async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            message: "Welcome to the dashboard!",
            user: req.user
        });
    } catch (error) {
        next(error);
    }
};