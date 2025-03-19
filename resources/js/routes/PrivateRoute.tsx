import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
    const auth = useContext(AuthContext);

    return auth?.token ? element : <Navigate to="/login" />;
}

export default PrivateRoute;