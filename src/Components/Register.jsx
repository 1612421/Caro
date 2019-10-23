import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Register extends Component {

    showErr = () => {
        const { err } = this.props;

        if (err && err.length !== 0){
            return  (
                <div className="alert alert-danger m-4 p-1" role="alert">
                    {
                        err.map((item, index) => (<div key={index}>{item}<br/></div>))
                    }
                </div>  
            )
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { register, setErrorMessage } = this.props;
        const { account, username, email, retypeEmail, password, retypePassword } = this.refs;
        
        if (email.value !== retypeEmail.value){
            setErrorMessage(['Email and confirm email does not match.'])
            return false;
        }

        if (retypePassword.value !== password.value){
            setErrorMessage(['Password and confirm password does not match.']);
            return false;
        }
        
        const postFields = {
            account: account.value,
            username: username.value,
            email: email.value,
            password: password.value,
        }

        register(postFields);
    
        return false;
    }

    render(){
        const { isAuthenticated } = this.props;

        if (isAuthenticated){
            return <Redirect to='/'/>
        }

        return (
            <div className="container">
                <div className="row h-100 my-auto">
                    <div className="card card-block mx-auto">
                        <div className="card-header">
                            <h3>Register</h3>
                        </div>
                        <div className="card-body">
                            {this.showErr()}
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"/></span>
                                    </div>
                                    <input ref="account" type="text" className="form-control" placeholder="Account" required/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-file-signature"/></span>
                                    </div>
                                    <input ref="username" type="text" className="form-control" placeholder="Username" required/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-envelope"/></span>
                                    </div>
                                    <input ref="email" type="email" className="form-control" placeholder="Email" required/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-envelope"/></span>
                                    </div>
                                    <input ref="retypeEmail" type="email" className="form-control" placeholder="Confirm email" required/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"/></span>
                                    </div>
                                    <input ref="password" type="password" className="form-control" placeholder="Password" required/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"/></span>
                                    </div>
                                    <input ref="retypePassword" type="password" className="form-control" placeholder="Confirm password" required/>
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
            </div>
        );
    }
}

export default Register;