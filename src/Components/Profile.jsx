import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Profile extends Component {

    constructor(props){
        super(props);
        this.avatar = React.createRef();
        this.file = React.createRef();
        this.account = React.createRef();
        this.email = React.createRef();
        this.btnSaveAvatar = React.createRef();
        this.btnCancelAvatar = React.createRef();
    }


    handleChangeFile = () => {
        const avatar = this.avatar.current;
        const btnSaveAvatar = this.btnSaveAvatar.current;
        const btnCancelAvatar = this.btnCancelAvatar.current;
        const fileInput = this.file.current;
        

        if (fileInput.files && fileInput.files[0]){
            const reader = new FileReader();
            reader.onload = (e) => {
                avatar.src = e.target.result;
                btnSaveAvatar.hidden = false;
                btnCancelAvatar.hidden = false;
                btnSaveAvatar.disabled = false;
                btnCancelAvatar.disabled =false;
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }

    render(){
        const { isAuthenticated, username, email, avatar } = this.props;

        if (!isAuthenticated){
            return <Redirect to='/'/>
        }

        return (
            <div className="container">
                <div className="row h-100 my-auto">
                    <div className="card card-block mx-auto card-profile">
                        <div className="card-header">
                            <h3>User profile</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-4 col-12">
                                        <div className="row justify-content-center">
                                            <div className="img-custom">
                                                <img ref={this.avatar} id="avatar" alt="User Pic" src={`http://localhost:3000/${avatar}`} className="rounded-circle" />
                                            </div>
                                            
                                            <div className="img-thumbnail" id="loading" hidden>
                                                <div className="spinner-border" role="status"/>
                                            </div>
                                            <input ref={this.file} type="file" id="file" onChange={this.handleChangeFile} hidden />
                                        </div> 
                                        <div className="row justify-content-center">
                                            <button type="button" className="btn btn-sm btn-outline-warning fas fa-image m-1" onClick={() => { this.file.current.click() }}/>
                                            <button ref={this.btnSaveAvatar} id="save-avatar-btn" type="button" className="btn btn-sm btn-outline-success far fa-save m-1" onClick="handleSaveAvatar()" hidden/>
                                            <button ref={this.btnCancelAvatar} id="cancel-avatar-btn" type="button" className="btn btn-sm btn-outline-danger fas fa-window-close m-1" onClick="handleCancelChangeAvatar()" hidden/>
                                        </div>
                                    </div>
                                    <div className="col-md-8 mt-5">
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-file-signature"/></span>
                                            </div>
                                            <input ref={this.account} type="text" name="userName" id="name" value={username} className="form-control" placeholder="Username" required readOnly/>
                                        </div>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-envelope"/></span>
                                            </div>
                                            <input ref={this.email} type="email" value={email} className="form-control" placeholder="Email" required readOnly/>
                                        </div>
                                        {/* <div className="form-group row">
                                            <label htmlFor="name" className="col-md-3 m-1 align-self-center" ><strong>Tên</strong></label>
                                            <input type="text" name="userName" id="name" value="{{userName}}" readOnly className="form-control col align-self-center"/>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="email" className="col-md-3 m-1 align-self-center" ><strong>Email</strong></label>
                                            <input type="text" value="{{user.email}}" readOnly className="form-control col align-self-center"/>
                                        </div> */}
                                    </div>
                                </div>
                                <button type="button" id="update" className="btn float-right m-2 btn-yellow" onClick="handleUpdateInfo()">Edit</button>
                                <button type="submit" id="save" className="btn btn-success float-right m-2" hidden>Save</button>
                                <button type="button" id="cancel" className="btn btn-danger float-right m-2" onClick="handleCancelUpateInfo()" hidden>Cancel</button>
                                <a href="/user/profile/change-password" role="button" className="btn float-left m-2 btn-yellow">Change password</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;