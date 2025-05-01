import React from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    let navigate = useNavigate();

    const { loginUser } = useAuth();

    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation();
        
        loginUser(new FormData(e.currentTarget))
            .then((resp) => {
                console.log(localStorage.getItem('token'), resp.data);
                return navigate('/admin');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="container flex-center login-container">
            <div className="container-wrap my-[50px]">
                <div className="box login-box">
                    <div className="box-header">
                        <h2>Accedi</h2>
                    </div>
                    <div className="box-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label htmlFor="email" className="flabel">Email</label>
                                <input type="email" className="field" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="flabel">Password</label>
                                <input type="password" className="field" id="password" name="password" />
                            </div>
                            <div className="form-group form-row">
                                <label className="checkbox">
                                    <input type="checkbox" />
                                    <span>Ricordami</span>
                                </label>
                                <button type="submit" className="primary-btn">Accedi</button>
                            </div>
                        </form>
                    </div>
                    <div className="box-footer">
                        <p>Non hai un account? <Link to="/register">Registrati</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;