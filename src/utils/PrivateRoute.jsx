import { Navigate } from 'react-router-dom';
import authService from '../services/auth/auth.jsx';

function PrivateRoute({ element, allowedRoles }) {
    const isLoggedIn = authService.isAuthenticated();
    const userRole = authService.getUserRole();

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to="/" replace />;
    }

    return element;
}

export default PrivateRoute; 