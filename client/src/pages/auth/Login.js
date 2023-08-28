import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postLogin } from '../../components/store/asyncAction/AuthAction';
import toast, { Toaster } from 'react-hot-toast';
import './login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loginErrors, token } = useSelector(state => state.AuthReducer);
    const [state, setState] = useState({
        email: '',
        password: ''
    })
    const handleInputs = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const userLogin = (e) => {
        e.preventDefault();
        dispatch(postLogin(state))
        // console.log('logged in')
    }
    useEffect(() => {
        if (loginErrors.length > 0) {
            loginErrors.map((error) => toast.error(error.msg));
        }
        if (token) {
            navigate('/dashboard')
        }
    }, [loginErrors]);

    return <div className="login">
        <Toaster
            position='top-right'
            reverseOrder={false}
            toastOptions={{
                style: {
                    fontSize: '14px',
                },
            }}
        />
        <div className="login-section">
            <div className='col-md-4 offset-md-4 login-form'>
                <div className="login-head text-center pb-5">
                    <h3>Login</h3>
                </div>
                <form onSubmit={userLogin}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                            value={state.email}
                            onChange={handleInputs} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            name="password"
                            value={state.password}
                            onChange={handleInputs} />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    </div>;
};

export default Login;
