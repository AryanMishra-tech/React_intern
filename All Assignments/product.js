// products.js

document.addEventListener('DOMContentLoaded', () => {
    loadUser();
    loadProducts();
});

function loadUser() {
    const username = localStorage.getItem('username') || 'User';
    document.getElementById('user-name').innerText = `Hello, ${username}`;
}

function loadProducts() {
    const products = [
        { name: "Sneaker 1", price: "$99.99", image: "https://4.imimg.com/data4/AA/HC/MY-26596027/men-s-fancy-t-shirt.jpg" },
        { name: "Sneaker 2", price: "$89.99", image: "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077" },
        { name: "Sneaker 3", price: "$79.99", image: "https://i.pinimg.com/736x/f6/2f/91/f62f91908902407fad9c20b5c2b93e41.jpg" },
        { name: "Sneaker 4", price: "$69.99", image: "https://muselot.in/cdn/shop/products/8.jpg?v=1658090078&width=1445" }
        // Add more products as needed
    ];

    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const h2 = document.createElement('h2');
        h2.textContent = product.name;

        const p = document.createElement('p');
        p.textContent = product.price;

        const favButton = document.createElement('button');
        favButton.textContent = "Add to Favorites";
        favButton.className = 'favorite-button';
        favButton.onclick = () => addToFavorites(product);

        productCard.appendChild(img);
        productCard.appendChild(h2);
        productCard.appendChild(p);
        productCard.appendChild(favButton);

        productList.appendChild(productCard);
    });
}

function addToFavorites(product) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(product);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(`${product.name} has been added to your favorites.`);
}

function goBack() {
    window.location.href = "welcome.html";  // Redirect to the welcome page
}
