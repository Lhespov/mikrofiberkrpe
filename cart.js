const CART_KEY = "mu_cart";

/* GET */
function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

/* SAVE */
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

/* ADD */
function addToCart(name, price, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ name, price, qty });
  }

  saveCart(cart);
}

/* COUNT */
function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  const el = document.getElementById("cartCount");
  if (el) el.textContent = `Korpa (${total})`;
}

/* INIT */
updateCartCount();
