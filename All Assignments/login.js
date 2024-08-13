document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve stored user data
    const storedEmail = localStorage.getItem('email');
    const storedUsername = localStorage.getItem('username');

    if (email === storedEmail) {
        // Redirect to welcome page with username passed as a query parameter
        window.location.href = `welcome.html?username=${storedUsername}`;
    } else {
        alert('Invalid login credentials');
    }
});
