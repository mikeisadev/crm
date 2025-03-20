import React from 'react';
import { Link } from 'react-router-dom';

import { register } from '../api';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
    function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        register(new FormData(e.currentTarget))
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error.response.data);
        });
    }

    return (
        <div className="container flex-center register-container">
            <div className="container-wrap my-[50px]">
                <div className="box register-box">
                    <div className="box-header">
                        <h2>Registrati</h2>
                    </div>
                    <div className="box-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <label htmlFor="fname" className="flabel">Nome</label>
                                <input type="fname" className="field" id="fname" name="fname" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lname" className="flabel">Cognome</label>
                                <input type="lname" className="field" id="lname" name="lname" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="flabel">Email</label>
                                <input type="email" className="field" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="flabel">Password</label>
                                <input type="password" className="field" id="password" name="password" />
                            </div>
                            <div className="form-group form-row">
                                <button type="submit" className="primary-btn">Registrati</button>
                            </div>
                        </form>
                    </div>
                    <div className="box-footer">
                        <p>Non già un account? <Link to="/login">Accedi</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;