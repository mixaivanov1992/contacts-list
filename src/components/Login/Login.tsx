import React, { useState } from 'react';
import {Input, InputLabel, Button, Alert } from '@mui/material';
import { actionLogin } from '@store/actions/authAction';
import { useDispatch } from 'react-redux';
import './styles.css'

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    async function onClickLogin() {
        if (!username || !password) {
            setError(true)
            return;
        }
        const result = await actionLogin(dispatch, username, password);
        if (!result) {
            setMessage('Неверный логин или пароль');
        }
    }

    return (
        <>
            <div className='login_form'>
                <div className='login_form-header'>Вход</div>
                <div className='login_form-username'>
                    <InputLabel htmlFor="username">Имя пользователя</InputLabel>
                    <Input
                        onChange={(e)=>{setUsername(e.currentTarget.value)}}
                        id="username"
                        aria-describedby="my-helper-text"
                        value={username}
                        error={error && !username}
                    />
                </div>
                <div className='login_form-password'>
                    <InputLabel htmlFor="password">Пароль</InputLabel>
                    <Input
                        onChange={(e)=>{setPassword(e.currentTarget.value)}}
                        id="password"
                        type='password'
                        aria-describedby="my-helper-text"
                        value={password}
                        error={error && !password}
                    />
                </div>
                <Button variant="contained" onClick={onClickLogin}>Войти</Button>
                {message && <div className='login_form-message'><Alert variant="outlined" severity="error">{message}</Alert></div>}
            </div>
        </>
    );
}


export default Login;