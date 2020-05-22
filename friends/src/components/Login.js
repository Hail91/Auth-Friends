import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');

    const userNameHandler = event => {
        setUserName(event.target.value);
    };

    const passHandler = event => {
        setPass(event.target.value)
    }

    const login = event => {
        event.preventDefault();

        const credentials = {
            username: userName,
            password: pass,
        };

        axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
           localStorage.setItem('token', res.data.payload);
           props.history.push('/friendsList');
        })
        .catch(error => console.log(error));
    };

    return (
        <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    <form onSubmit={login}>
                      <div className="form-label-group">
                        <input value={userName} onChange={userNameHandler} type="text" className="form-control" placeholder="User name" required autoComplete="off"/>
                        <label htmlFor="inputEmail">Username</label>
                      </div>
      
                      <div className="form-label-group">
                        <input value={pass} onChange={passHandler} type="password" id="inputPassword" className="form-control" placeholder="Password" required autoComplete="off"/>
                        <label htmlFor="inputPassword">Password</label>
                      </div>
      
                      <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                      </div>
                      <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                      <div className="text-center">
                        <a className="small" href="#">Forgot password?</a></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    )
}

export default Login;


