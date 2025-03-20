import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
    const auth = useContext(AuthContext);

    // console.log(auth?.getToken(), 'uSER IS AUTHENTICATED');

    return auth?.getToken() ? element : <Navigate to="/login" />;
}

export default PrivateRoute;