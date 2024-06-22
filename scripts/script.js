function Start() {
  render();
  shoppingCartExit();
}

function render() {
  let content = document.getElementById("menuPost");
  content.innerHTML = "";

  for (let i = 0; i < menu.length; i++) {
    let menuliste = menu[i];
    content.innerHTML += returnHTML(menuliste, i);
  }
}

function addToCartItem(i) {
  updateCartItem(menu[i], i, 1);
  showPlusOne();
}

function updateCartItem(item, i, amount) {
  item.ammount += amount;
  item.totalPrice = item.ammount * item.ItemPrice;

  if (item.ammount === 0) {
    removeCartItemHTML(i);
  } else {
    updateCartItemHTML(item, i);
  }
  updateShopingCartHeader();
}

function updateCartItemHTML(item, i) {
  let existingItem = document.getElementById("cart" + i);
  let itemHTML = renderCartItem(item, i);

  if (existingItem) {
    existingItem.innerHTML = itemHTML;
  } else {
    let newItem = document.createElement("div");
    newItem.id = "cart" + i;
    newItem.innerHTML = itemHTML;
    document.getElementById("shoppingCart").appendChild(newItem);
  }
}

function remove(i) {
  updateCartItem(menu[i], i, -1);
}

function addItems(i) {
  updateCartItem(menu[i], i, 1);
}

function removeCartItemHTML(i) {
  let existingItem = document.getElementById("cart" + i);
  if (existingItem) {
    existingItem.remove();
  }
}

function updateShopingCartHeader() {
  let cartTotal = 0;
  for (let i = 0; i < menu.length; i++) {
    cartTotal += menu[i].ammount;
  }
  let cartContent = document.getElementById("shoppingCartList");
  if (cartContent) {
    cartContent.innerHTML = shopRender();
  }
}

function renderCartItems() {
  let cartItemsHTML = "";
  for (let i = 0; i < menu.length; i++) {
    let item = menu[i];
    if (item.ammount > 0) {
      let itemHTML = renderCartItem(item, i);
      cartItemsHTML += itemHTML;
    }
  }
  return cartItemsHTML;
}

function shoppingCartExit() {
  for (let i = 0; i < menu.length; i++) {
    menu[i].ammount = 0;
    menu[i].totalPrice = 0;
  }

  let shopingbag = document.getElementById("shoppingCartList");
  shopingbag.innerHTML = shopRender();
}

function buy() {
  let totalPrice = 0;
  for (let i = 0; i < menu.length; i++) {
    totalPrice += menu[i].totalPrice;
  }

  if (totalPrice < 15) {
    alert("Sie haben noch keine Artikel ausgewählt. Mindestbestellwert beträgt 10 €.");
  } else {
    alert("Vielen Dank für Ihre Bestellung!");
    shoppingCartExit();
    closeCart();
  }
}

function cartMobile() {
  let cartList = document.getElementById("shoppingCartList");

  if (cartList.classList.contains("mobile-hide")) {
    cartList.classList.remove("mobile-hide");
    cartList.classList.add("show");
  } else {
    cartList.classList.remove("show");
    cartList.classList.add("mobile-hide");
  }
}

function closeCart() {
  let cartList = document.getElementById("shoppingCartList");
  cartList.classList.remove("show");
  cartList.classList.add("mobile-hide");
}

window.onclick = function(event) {
  let cartList = document.getElementById("shoppingCartList");
  if (event.target == cartList) {
    cartList.classList.remove("show");
    cartList.classList.add("mobile-hide");
  }
}

function showPlusOne() {
  const plusOneElement = document.getElementById('plusOne');
  plusOneElement.classList.add('show');

  setTimeout(() => {
    plusOneElement.classList.remove('show');
  }, 1000); // 1 Sekunde anstatt 30 Sekunden
}
