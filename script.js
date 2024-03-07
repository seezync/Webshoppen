let cartItems = [];
let cartCount = 0;

function addToCart(productName, price, index) {
    cartItems.push({ index: index, name: productName, price: price });
    cartCount++;
    updateCart();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    cartCount--;
    updateCart();
}

function updateCart() {
    updateCartCount();
    updateTotalCost();
    updateCartPanel();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cartCount;
}

function updateTotalCost() {
    let totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-cost').innerText = '$' + totalCost.toFixed(2);
}

function toggleCart() {
    let cartPanel = document.getElementById('cart');
    if (cartPanel.style.display === 'block') {
        cartPanel.style.display = 'none';
    } else {
        cartPanel.style.display = 'block';
        updateCartPanel();
    }
}

function updateCartPanel() {
    let cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    cartItems.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            removeFromCart(index);
        };
        li.appendChild(removeButton);
        cartItemsList.appendChild(li);
    });
}