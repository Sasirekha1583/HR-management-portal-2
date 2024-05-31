import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [user, setUser] = useState({ username: '', password: '', isAdmin: false });

    const handleSignup = () => {
        // Send a POST request to the backend to create a new user
        axios.post('http://localhost:8080/attnddelid/users/signup', user)
            .then((response) => {
                console.log(response.data);
                // Handle success, e.g., show a success message or redirect
            })
            .catch((error) => {
                console.error(error);
                // Handle errors, e.g., display an error message
            });
    };

    return (
        <div>
            <h2>Signup</h2>
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
            <label>
                <input
                    type="checkbox"
                    onChange={(e) => setUser({ ...user, isAdmin: e.target.checked })}
                />
                Admin
            </label>
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
}

export default Signup;
