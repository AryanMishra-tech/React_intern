// Retrieve favorite items from localStorage or set an empty array if not available
let favoriteItems = JSON.parse(localStorage.getItem('favorites')) || [];

// Function to render favorite items
function renderFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';

    favoriteItems.forEach((item, index) => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('favorite-card');

        itemCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>$${item.price}</p>
            <button class="remove-button" onclick="removeFromFavorites(${index})">Remove</button>
        `;

        favoritesList.appendChild(itemCard);
    });
}

// Function to remove an item from favorites
function removeFromFavorites(index) {
    favoriteItems.splice(index, 1); // Remove the item from the array
    localStorage.setItem('favorites', JSON.stringify(favoriteItems)); // Update localStorage
    renderFavorites(); // Re-render the favorites list
}

// Function to go back to the product page
function goBack() {
    window.location.href = 'product.html'; // Change this to the actual product page URL
}

// Initial rendering of the favorites list
renderFavorites();
