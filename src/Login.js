import React, { useState } from 'react';
import axios from "axios";
import apiURL from './myURL';

function Login() {

    const [id_borrower, setId_borrower] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
        setIsError(false);
        window.localStorage.clear();
        axios.post(apiURL + '/login', {id_borrower,password}, {
        })
            .then(res => {
                setId_borrower('');
                setPassword('');
                setLoading(false);
                console.log(res.data);
                if(res.data){
                    localStorage.setItem('token',res.data);
                }
            }).catch(err => {
                setLoading(false);
                setIsError(true);
            });
    }

    return (
            <div style={{ maxWidth: 350 }}>
                <table>
                <tr>
                <td><label htmlFor="id_borrower">id_borrower </label></td>
                <td>
                <input
                    type="text"
                    id="id_borrower"
                    value={id_borrower}
                    onChange={e => setId_borrower(e.target.value)} /></td>
                </tr>
                <tr>
                <td><label htmlFor="password">password </label></td>
                <td>
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                </td>
                </tr>
                </table>
                <button className='btn btn-primary'
                    type="submit"
                    onClick={handleSubmit}
                    disabled={loading}
                >Login</button>
                {isError && <small>Something went wrong. Please try again later.</small>}
        </div>
    );
}

export default Login;