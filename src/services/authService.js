import bcrypt from 'bcryptjs';
import * as userRepository from '../repositories/userRepository.js';
import { generateToken } from '../utils/token.js';

export const login = async ({ username, password }) => {
    // Validate input
    if (!username || !password) {
        const error = new Error('Username and password are required');
        error.statusCode = 400;
        throw error;
    }
    
    // Find user by username
    const user = await userRepository.findByUsername(username);

    if (!user) {
        const error = new Error('Invalid credentials');
        error.statusCode = 401;
        throw error;
    }
    
    // Validate password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        const error = new Error('Invalid credentials');
        error.statusCode = 401;
        throw error;
    }
    
    // Generate JWT token
    const token = generateToken({
        id: user.id,
        username: user.username,
        role: user.role,
    });

    // Return user without password
    const { password: userPassword, ...userWithoutPassword } = user;
    
    return {
        user: userWithoutPassword,
        token
    };
}