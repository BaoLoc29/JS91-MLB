import React from 'react';
import { useState } from 'react';
import { FaEye, FaUser, FaEyeSlash } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { DatePicker } from 'antd';
import './style.css';
const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState(null);

    const [passwordError, setPasswordError] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [repassword, setRePassword] = useState('');
    const [showRePassword, setShowRePassword] = useState(false);

    const navigate = useNavigate();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickShowRePassword = () => {
        setShowRePassword(!showRePassword);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== repassword) {
            setPasswordError("Mật khẩu nhập lại không khớp. Vui lòng kiểm tra lại!");
            alert(passwordError);
        }
        else {
            const userData = {
                email: email,
                username: username,
                phoneNumber: phoneNumber,
                password: password,
                date: date ? date.format('YYYY-MM-DD') : ''
            };

            try {
                const response = await fetch('https://65b9e7f8b4d53c0665519a00.mockapi.io/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                });
                const data = await response.json();
                console.log(data); // log the response data
                alert('Đăng ký thành công. Đến đăng nhập ngay!');
                navigate('/account/login');
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };
    return (
        <div className='register-form'>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Đăng Ký</h1>
                    <div className='input-box'>
                        <input type='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                        <MdEmail className='icon' />
                    </div>

                    <div className='input-box'>
                        <input type='text' placeholder='Họ và tên' required onChange={(e) => setUsername(e.target.value)} />
                        <FaUser className='icon' />
                    </div>

                    <div className='input-box'>
                        <input type='number' placeholder='Số điện thoại' required onChange={(e) => setPhoneNumber(e.target.value)} />
                        <FaPhoneVolume className='icon' />
                    </div>

                    <div className='input-box'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Mật khẩu'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {showPassword ? <FaEye onClick={handleClickShowPassword} className='icon' /> : <FaEyeSlash onClick={handleClickShowPassword} className='icon' />}
                    </div>

                    <div className='input-box'>
                        <input
                            type={showRePassword ? 'text' : 'password'}
                            placeholder='Nhập lại mật khẩu'
                            required
                            value={repassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                        {showRePassword ? <FaEye onClick={handleClickShowRePassword} className='icon' /> : <FaEyeSlash onClick={handleClickShowRePassword} className='icon' />}
                    </div>


                    <div className='input-box'>
                        <DatePicker className='date' size='default' suffixIcon={null} placeholder='Ngày sinh' onChange={(e) => setDate(e)} />
                        <BsCalendar2DateFill className='icon' />
                    </div>

                    <div className='regulation'>
                        <label><input type='checkbox' />Tôi đồng ý về những điều khoảng và điều kiện</label>
                    </div>
                    <button type='submit'>Đăng Ký</button>

                    <div className='register-link'>
                        <p>Bạn đã có tài khoản? <Link to="/account/login">Đăng nhập</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default RegisterForm;