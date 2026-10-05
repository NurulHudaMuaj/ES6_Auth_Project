import { verifyToken } from '../utils/token.js';

/**
 * Authentication middleware
 * Verifies JWT token and attaches user info to request
 * Use this middleware on protected routes
 */
export const authenticate = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      const error = new Error('No token provided');
      error.statusCode = 401;
      throw error;
    }

    const [scheme, token] = authorization.split(' ');

    if (scheme !== 'Bearer' || !token) {
      const error = new Error('Invalid token format. Use: Bearer <token>');
      error.statusCode = 401;
      throw error;
    }

    const decoded = verifyToken(token);
    
    // Attach user info to request object
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};