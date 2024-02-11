import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            // If user info is present, redirect to the homepage
            navigate("/"); // Use the path you want to navigate to
        }
    }, [navigate]); // Add navigate to the dependencies array

    async function login(event) {
        event.preventDefault();

        let item = { email, password };
        console.warn(item);

        let result = await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            }
        });

        result = await result.json();
        console.warn("result", result);
        localStorage.setItem("user-info", JSON.stringify(result));

        // After successful login, navigate to the homepage
        navigate("/"); // Use the path you want to navigate to
    }

    return (
        <main>
            <div className='col-sm-6 offset-sm-3'>
                <h1>Log In</h1>
                <div className='col-sm-6 offset-sm-3'>
                    Email:
                    <input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)} className='form-control'></input>
                    <br />
                    Password
                    <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} className='form-control'></input>
                    <br />
                    <Button onClick={login} className='btn btn-primary'>Login</Button>
                </div>
            </div>
        </main>
    );
}
