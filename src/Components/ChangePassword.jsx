import React, { Component } from 'react';

class ChangePassword extends Component {
    constructor(props){
        super(props);
        this.oldPassword = React.createRef();
        this.newPassword = React.createRef();
        this.confirmPassword = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const oldPw = this.oldPassword.current.value;
        const newPw = this.newPassword.current.value;
        const confirmPw = this.confirmPassword.current.value;
        const { setErrorMessage, resetSuccessStatus, changePassword } = this.props;
        resetSuccessStatus();

        if (newPw !== confirmPw){
            setErrorMessage(['New password and confirm password does not match.']);
        }
        else{
            const postFields = {
                oldPassword: oldPw,
                newPassword: newPw
            }
            changePassword(postFields);
        }

        return false;
    }

    render() { 
        const { invertShouldShowChangePassword } = this.props;
        
        return (  
            <>
                <div className="container">
                    <div className="row h-100 my-auto">
                        <div className="card card-block mx-auto">
                            <div className="card-header">
                                <h3>Change password</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"/></span>
                                        </div>
                                        <input ref={this.oldPassword} type="password" className="form-control" placeholder="Current password" required/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"/></span>
                                        </div>
                                        <input ref={this.newPassword} type="password" className="form-control" placeholder="New password" required/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"/></span>
                                        </div>
                                        <input ref={this.confirmPassword} type="password" className="form-control" placeholder="Confirm password" required/>
                                    </div>
                                    <div className="row form-group float-right">
                                        <button type="button" className="btn btn-danger mr-4" onClick={invertShouldShowChangePassword}>
                                            Cancel
                                        </button>
                                        <button type="submit" className="btn btn-success mr-4">
                                            Change
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default ChangePassword;