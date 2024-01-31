import React, { useState } from 'react';
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import './style.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            });
            console.log(response);
            if (!response.ok) {
                alert('Email hoặc mật khẩu không đúng. Vui lòng kiểm tra lại!');
            } else {
                const data = await response.json();
                
                localStorage.setItem('user', JSON.stringify(data));
                alert('Đăng nhập thành công! Chúc bạn mua sắm vui vẻ!');
                navigate('/');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='login-form'>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Đăng nhập</h1>
                    <div className='input-box'>
                        <input 
                            type='text' 
                            placeholder='Email' 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Mật khẩu'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {showPassword ? <FaEye onClick={handleClickShowPassword} className='icon'/> : <FaEyeSlash onClick={handleClickShowPassword} className='icon' />}
                    </div>

                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Nhớ tôi</label>
                        <Link to="/account/forgot-password">Quên mật khẩu</Link>
                    </div>

                    <button type='submit'>Đăng nhập</button>

                    <div className='register-link'>
                        <p>Bạn chưa có tài khoản? <Link to="/account/register">Đăng ký ngay</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
