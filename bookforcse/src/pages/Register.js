import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';



export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   


    async function signUp(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        let item = { name, email, password };
        console.warn(item);

        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            }
        });

        // Corrected: Call result.json() with parentheses
        result = await result.json();
        console.warn("result", result);
        localStorage.setItem("user-info", JSON.stringify(result));
        
    }

    return (
        <main>
            <div className='col-sm-6 offset-sm-3'>
                <h1>Register</h1>
                <form method='POST' onSubmit={signUp}>
                    Name:
                    <input className="rounded text-black-500" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name"/>
                    <br />
                    <br />
                    Email:
                    <input className="rounded text-black-500" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email"/>
                    <br />
                    <br />
                    Password:
                    <input className="rounded text-black-500" type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
                    <br />
                    <br />
                    <Button onClick={signUp} as="input" type="submit" value="Submit" />
                </form>
            </div>
        </main>
    );
}
