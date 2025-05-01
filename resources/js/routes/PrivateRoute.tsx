import React, { useContext } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
    const auth = useContext(useAuth);

    return auth?.getToken() ? element : <Navigate to="/login" />;
}

export default PrivateRoute;