import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user } = UserAuth() ?? { user: undefined };

    if (!user) {
        return <Navigate to='/' />;
    }

    return children;
};
