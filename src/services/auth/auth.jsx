import { jwtDecode } from 'jwt-decode';

const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        return decodedToken.exp > currentTime;
    } catch (error) {
        return false;
    }
};

const isLoggedIn = () => {
    return !!localStorage.getItem('token');
};

const getUserRole = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.role;
    } catch (error) {
        return null;
    }
};

const authService = { isAuthenticated, getUserRole, isLoggedIn };

export default authService;
export { isAuthenticated, isLoggedIn };
