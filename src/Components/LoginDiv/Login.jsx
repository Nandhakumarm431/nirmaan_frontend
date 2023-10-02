import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import './login.css'
import { MdCancel } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { LiaBriefcaseSolid } from 'react-icons/lia'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Link } from '@mui/material';
import ForgetPassword from '../ForgetPasswordDiv/ForgetPassword';


const Login = ({ isOpen, onClose }) => {

    const apiUrl = process.env.REACT_APP_API_URL;

    const [click, setClick] = useState(false)
    const [stylechnage, setstylechnage] = useState(false)

    const [regStyleChange, setRegStyleChange] = useState(false)

    const [role, setRole] = useState('user');
    const [username, setUsername] = useState('');
    const [emailID, setEmailID] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');


    const [userID, setUserID] = useState('')
    const [otpnumber, setOtpnumber] = useState('')



    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    const onSignupSubmit = async (e) => {

        e.preventDefault();
        let signupdata = {
            "name": username,
            "email": emailID,
            "password": password1,
            "password2": password2,
            "roles": [
                role
            ]
        }

        try {
            const response = await fetch(`${apiUrl}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupdata),
            });

            if (response.ok) {
                // Successful login, you can redirect or perform any other action here
                const jsonResponse = await response.json();
                if (jsonResponse.status === "FAILED") {
                    NotificationManager.error(jsonResponse.message);
                } else {
                    // localStorage.setItem('userData', JSON.stringify(data));
                    // setClick(!click)
                    setRegStyleChange(!regStyleChange)
                    const { userID } = jsonResponse.data;
                    // Access the userID
                    setUserID(userID);
                    NotificationManager.success(jsonResponse.message);
                }

                // window.location.reload();
            } else {
                // Handle login error
                const data = await response.json();
                console.log(data.status);
                NotificationManager.error(data.message);

            }
        } catch (error) {
            // console.error('Error:', error);
            NotificationManager.error(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let payload = {
            "email": username,
            "password": password
        }
        // console.log('payload', payload);
        try {
            const response = await fetch(`${apiUrl}/api/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                // Successful login, you can redirect or perform any other action here
                const data = await response.json();
                NotificationManager.success('Login successful');

                localStorage.setItem('userData', JSON.stringify(data));
                onClose()

                // console.log('Login successful', localStorage.getItem('userData'));
                // console.log('userrole :', data.roles[0]);
                // window.location.reload();
            } else {
                // Handle login error
                const data = await response.json();
                // console.log(data.message);
                NotificationManager.error(data.message);
            }
        } catch (error) {
            // console.error('Error:', error);
            NotificationManager.error(error);
        }


    }
    const onSignuphandle = () => {
        setClick(true);
        setRegStyleChange(false);
    }

    const accountVerify = async (e) => {
        e.preventDefault();

        let payload = {
            "userID": userID,
            "otp": otpnumber
        }

        try {
            const response = await fetch(`${apiUrl}/api/auth/verifyOTP`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                if (jsonResponse.status === "FAILED") {
                    NotificationManager.error(jsonResponse.message);
                } else {
                    NotificationManager.success('Account Verified');
                    setClick(!click)
                }
            } else {
                // Handle login error
                const data = await response.json();
                NotificationManager.error(data.message);
            }
        } catch (error) {
            NotificationManager.error(error);
        }
    }

    const [isForgetModalOpen, setIsForgetModalOpen] = useState(false);

    const openForgetModal = async (e) => {
        e.preventDefault();

        setIsForgetModalOpen(true);

    };

    const closeForgetModal = () => {
        setIsForgetModalOpen(false);
    };


    if (!isOpen) return null;

    return (
        <div>
            <Modal
                open={isOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <div style={{ display: !isForgetModalOpen ? "block" : 'none' }}>
                        <div className="modal fade show" id="loginPopupModal" style={{ display: !click ? "block" : 'none' }} aria-modal="true" role="dialog">
                            <div className="modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable">
                                <div className="modal-content">
                                    {/* <button type="button" className="closed-modal" onClick={onClose}></button> */}
                                    <MdCancel className="closed-modal" onClick={onClose} />
                                    <div className="modal-body">
                                        <div id="login-modal">
                                            <div className="login-form default-form">
                                                <div className="form-inner">
                                                    <h3>Login to Nirmaan</h3>

                                                    <form method="post" onSubmit={handleSubmit}>
                                                        <div className="form-group1">
                                                            <label>Email ID</label>
                                                            <input type="text" name="username"
                                                                value={username} onChange={handleChange}
                                                                placeholder="Email ID" />
                                                        </div>
                                                        <div className="form-group1">
                                                            <label>Password</label>
                                                            <input type="password" name="password"
                                                                value={password} onChange={handleChange}
                                                                placeholder="password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="field-outer">
                                                                <div className="input-group checkboxes square">
                                                                    <input type="checkbox" name="remember-me" id="remember" />
                                                                    <label className="remember">
                                                                        <span className="custom-checkbox"></span>
                                                                        Remember me</label>
                                                                </div>
                                                                <a href='#' onClick={openForgetModal}
                                                                    // to={{ pathname: '/passchange', state: { ispassChangeOpen: isForgetModalOpen, onpasschangeClose: closeForgetModal } }}
                                                                    className="pwd">Forgot password?
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className='btn-align'>
                                                                <button className="theme-btn btn-style-one" type="submit" name="log-in">Log In</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className='bottom-box'>
                                                        <div className="text">Don't have an account?
                                                            <a onClick={onSignuphandle}
                                                                // onClick={() => setClick(true)} 
                                                                className="call-modal signup" data-bs-toggle="modal" data-bs-target="#registerModal" href="/#">&nbsp;&nbsp;Signup</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <NotificationContainer />
                        </div>
                        <div className="modal fade show" id="registerModal" style={{ display: !click ? "none" : 'block' }} aria-modal="true" role="dialog">
                            <div className="modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable">
                                <div className="modal-content">
                                    {/* <button type="button" className="closed-modal" onClick={onClose}></button> */}
                                    <MdCancel className="closed-modal" onClick={onClose} />
                                    <div className="modal-body">
                                        <div id="login-modal" style={{ display: !regStyleChange ? "block" : 'none' }}>
                                            <div className="login-form default-form">
                                                <div className="form-inner">
                                                    <h3>Create a Free Nirmaan Account</h3>
                                                    <div className='form-group register-dual'>
                                                        <ul className='btn-box row'>
                                                            <li
                                                                onClick={() => setRole('user')}
                                                                className={stylechnage ? "col-lg-6 col-md-12 " : "col-lg-6 col-md-12  react-tabs__tab--selected"} role="tab">
                                                                <button className="theme-btn btn-style-four" onClick={() => setstylechnage(!stylechnage)}>
                                                                    <AiOutlineUser className='btn-icon' /> Student
                                                                </button>
                                                            </li>
                                                            <li
                                                                onClick={() => setRole('moderator')}
                                                                className={stylechnage ? "col-lg-6 col-md-12  react-tabs__tab--selected" : "col-lg-6 col-md-12 "} role="tab">
                                                                <button className="theme-btn btn-style-four" onClick={() => setstylechnage(!stylechnage)}>
                                                                    <LiaBriefcaseSolid />  Employee
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <form method="post" onSubmit={onSignupSubmit}>
                                                        <div className="form-group1">
                                                            <label>Username</label>
                                                            <input type="text"
                                                                value={username} onChange={(e) => setUsername(e.target.value)}
                                                                name="username" placeholder="Username" />
                                                        </div>
                                                        <div className="form-group1">
                                                            <label>Email ID</label>
                                                            <input type="text"
                                                                value={emailID} onChange={(e) => setEmailID(e.target.value)}
                                                                name="email" placeholder="email" />
                                                        </div>
                                                        <div className='form-df'>
                                                            <div className="form-group1">
                                                                <label>Password</label>
                                                                <input type="password"
                                                                    value={password1} onChange={(e) => setPassword1(e.target.value)}
                                                                    name="password1" placeholder="password1" />
                                                            </div>
                                                            <div className="form-group1">
                                                                <label>Confirm Password</label>
                                                                <input
                                                                    value={password2} onChange={(e) => setPassword2(e.target.value)}
                                                                    type="password" name="password2" placeholder="password2" />
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <div className='btn-align'>
                                                                <button className="theme-btn btn-style-one" type="submit" name="register">Register</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className='bottom-box'>
                                                        <div className="text">Already have an account?
                                                            <a onClick={() => setClick(!click)} className="call-modal signup" data-bs-toggle="modal" data-bs-target="#registerModal" href="/#">&nbsp;&nbsp;Login</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="login-modal" style={{ display: regStyleChange ? "block" : 'none' }} >
                                            <div className="login-form default-form">
                                                <div className="form-inner">
                                                    <h3>Verify your Account</h3>

                                                    <form method="post" onSubmit={accountVerify}>
                                                        <div className="form-group1">
                                                            <label>OTP: </label>
                                                            <input type="text"
                                                                value={otpnumber} onChange={(e) => setOtpnumber(e.target.value)}
                                                                name="otpnumber" placeholder="Enter your otp" />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className='btn-align'>
                                                                <button className="theme-btn btn-style-one" type="submit" name="register">Verify</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <NotificationContainer />
                        </div>

                    </div>
                </>
            </Modal>
            <ForgetPassword ispassChangeOpen={isForgetModalOpen} onpasschangeClose={closeForgetModal} />

        </div>


    )
}

export default Login