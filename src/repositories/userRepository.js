import bcrypt from 'bcryptjs';
const STATIC_USERS = [
  {
    id: '1',
    username: 'admin',
    password:bcrypt.hashSync('admin',10),
    role: 'administrator',
    email: 'admin@example.com',
    createdAt: new Date('2024-01-01')
  }
];

const delay = (ms = 50) => new Promise(resolve => setTimeout(resolve, ms));

export const findByUsername = async (username) => {
    await delay();
    const user = STATIC_USERS.find(u => u.username === username);
    return user || null;
}; 

export const findAll = async () => {
    await delay();
    return STATIC_USERS.map(({ password, ...user }) => user);
};