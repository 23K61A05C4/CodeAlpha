const products = [
    { id: 1, name: "Product A", price: 10.99, image: "https://he.albion.co.uk/web/image/product.template/89995/image_1024?unique=b0a3b14"},
    { id: 2, name: "Product B", price: 800.27, image: "https://o.aolcdn.com/hss/storage/midas/e114c54b74959c412adc69b7a6494233/200543687/sony-s90-bravia-curved-tv-2014-08-07-01.jpg"},
    { id: 3, name: "Product C", price: 2286.48, image: "https://th.bing.com/th/id/OIP.YgxlDSx1fpzvJZaxpDqhSwHaFw?w=553&h=430&rs=1&pid=ImgDetMain"}
];
const cart = [];
// Function to display products
function displayProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}" width="150" height="150" />
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add products to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
                        <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(li);
    });

    cartTotal.innerText = total.toFixed(2);
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Initialize the store
displayProducts();
