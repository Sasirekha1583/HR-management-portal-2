import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [user, setUser] = useState({ username: '', password: '' });

    const handleLogin = () => {
        // Send a POST request to the backend to log in
        axios.post('http://localhost:8080/users/login', user)
            .then((response) => {
                console.log(response.data);
                // Handle success, e.g., set user authentication state or redirect
            })
            .catch((error) => {
                console.error(error);
                // Handle errors, e.g., display an error message
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;