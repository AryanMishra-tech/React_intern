document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store user data (excluding password for this example)
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    // Redirect to login page
    window.location.href = 'login.html';
});
