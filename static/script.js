let cart = [];

function addToCart(productName, price) {
  const existingItem = cart.find(item => item.name === productName);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: productName, price, quantity: 1 });
  }
  renderCart();
}

function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName);
  renderCart();
}

function changeQuantity(productName, amount) {
  const item = cart.find(i => i.name === productName);
  if (item) {
    item.quantity += amount;
    if (item.quantity <= 0) {
      removeFromCart(productName);
    }
    renderCart();
  }
}

function renderCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.quantity} x ${item.name} (₹${item.price})
      <button onclick="changeQuantity('${item.name}', 1)">+</button>
      <button onclick="changeQuantity('${item.name}', -1)">-</button>
      <button onclick="removeFromCart('${item.name}')">Remove</button>
    `;
    cartList.appendChild(li);
  });
}

function checkoutCart() {
  if (cart.length === 0) {
    alert('Cart is empty!');
    return;
  }
  let message = 'Hi! I want to order the following products:%0A';
  cart.forEach(item => {
    message += `- ${item.quantity} x ${item.name}%0A`;
  });
  const phone = '919150059199';
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}
