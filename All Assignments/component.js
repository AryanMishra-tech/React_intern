// component.js

document.addEventListener('DOMContentLoaded', () => {
    loadUser();
});

function loadUser() {
    const username = localStorage.getItem('username') || 'User';
    document.getElementById('user-name').innerText = `Hello, ${username}`;
}

const products = [
    { name: "Sneaker 1", price: "$99.99", image: "https://4.imimg.com/data4/AA/HC/MY-26596027/men-s-fancy-t-shirt.jpg" },
    { name: "Sneaker 2", price: "$89.99", image: "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077" },
    { name: "Sneaker 3", price: "$79.99", image: "https://i.pinimg.com/736x/f6/2f/91/f62f91908902407fad9c20b5c2b93e41.jpg" },
    { name: "Sneaker 4", price: "$69.99", image: "https://muselot.in/cdn/shop/products/8.jpg?v=1658090078&width=1445" },
    { name: "Sneaker 4", price: "$69.99", image: "https://muselot.in/cdn/shop/products/8.jpg?v=1658090078&width=1445" }
    // Add more products as needed
];

function displayFlatList() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    products.forEach(product => {
        const card = createCard(product);
        content.appendChild(card);
    });
}

function displayScrollView() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const scrollView = document.createElement('div');
    scrollView.className = 'scroll-view';

    products.map(product => {
        const card = createCard(product);
        scrollView.appendChild(card);
    });

    content.appendChild(scrollView);
}

function createCard(product) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const h2 = document.createElement('h2');
    h2.textContent = product.name;

    const p = document.createElement('p');
    p.textContent = product.price;

    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);

    return card;
}
