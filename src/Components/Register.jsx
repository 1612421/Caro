import React from 'react';

const Register = () => {
    return (
        <div className="container">
            <div className="row h-100 my-auto">
                <div className="card card-block mx-auto">
                    <div className="card-header">
                        <h3>Register</h3>
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
                                    <span className="input-group-text"><i className="fas fa-file-signature"/></span>
                                </div>
                                <input name="username" type="text" className="form-control" placeholder="Username" required/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-envelope"/></span>
                                </div>
                                <input name="email" type="email" className="form-control" placeholder="Email" required/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-envelope"/></span>
                                </div>
                                <input type="email" className="form-control" placeholder="Retype email" required/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"/></span>
                                </div>
                                <input name="password" type="password" className="form-control" placeholder="Password" required/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"/></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Retype password" required/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn float-right login_btn">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Have an account?<a href="/user/login">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Register;