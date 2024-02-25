// Login and sign-up functionality
document.addEventListener('DOMContentLoaded', function() {
    const LOGIN_URL = 'https://perenual.com/api/species-list?key=sk-u1HU65db614cf00c44355/login';
    const SIGNUP_URL = 'https://perenual.com/api/species-list?key=sk-u1HU65db614cf00c44355/signup';

    function login(email, password) {
        // Make an API call to authenticate user
        fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-u1HU65db614cf00c44355' // Replace with your actual API key
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid credentials');
            }
            return response.json();
        })
        .then(data => {
            console.log('Login successful', data);
            // Redirect user to main page after successful login
            window.location.href = 'main.html';
        })
        .catch(error => {
            console.error('Login failed', error);
            // Display error message to user
        });
    }

    function signup(fullname, email, password) {
        // Make an API call to register new user
        fetch(SIGNUP_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-u1HU65db614cf00c44355' // Replace with your actual API key
            },
            body: JSON.stringify({ fullname, email, password }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to sign up');
            }
            return response.json();
        })
        .then(data => {
            console.log('Sign up successful', data);
            // Redirect user to login page after successful sign up
            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error('Sign up failed', error);
            // Display error message to user
        });
    }

    // Add event listeners for login and sign-up forms
    // ...
});
