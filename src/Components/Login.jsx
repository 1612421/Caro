import React from 'react';

// eslint-disable-next-line import/no-unresolved
import '../css/Login.css';

const Login = () => {
    return (
        <div className="container">
            <div className="row h-100 my-auto">
                <div className="card card-block mx-auto">
                    <div className="card-header">
                        <h3>Login</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"/></span>
                                </div>
                                <input name="account" type="text" className="form-control" placeholder="Account" required/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"/></span>
                                </div>
                                <input name="password" type="password" className="form-control" placeholder="Password" required/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn float-right login_btn">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don&#39;t have an account?<a href="/user/register">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Login;