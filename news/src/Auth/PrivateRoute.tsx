// PrivateRoute.tsx
import React from 'react';
import {  Navigate} from 'react-router-dom';
import { useAuth } from './AuthContext';

interface PrivateRouteProps {
  path: string;
  children?: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, children }) => {
  const { loggedIn } = useAuth();

  return loggedIn ? (
  children
  ) : (
    <Navigate to="/login" replace={true} state={{ from: path }} />
  );
};

export default PrivateRoute;
