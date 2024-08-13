document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username'); // Retrieve the username from localStorage
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.innerHTML = `Welcome, ${username}!`; // Display the username in the welcome message

    document.getElementById('productButton').addEventListener('click', () => {
        window.location.href = 'product.html';
    });

    document.getElementById('logoutButton').addEventListener('click', () => {
        localStorage.removeItem('username'); // Remove username from localStorage on logout
        window.location.href = 'index.html';
    });
    document.getElementById('favoritePageButton').addEventListener('click', () => {
        window.location.href = 'favourite.html';
    });    
});
