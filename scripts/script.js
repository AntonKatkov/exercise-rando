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
}
function updateCartItem(item, i, amount) {
  item.ammount += amount;
  item.totalPrice = item.ammount * item.ItemPrice;
  updateCartItemHTML(item, i);
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
function removeCartItemHTML(i) {
  let existingItem = document.getElementById("cart" + i);
  if (existingItem) {
    existingItem.remove();
  }
}
function addItems(i) {
  let addToCart = menu[i];
  addToCart.ammount += 1;
  addToCart.totalPrice = addToCart.ammount * addToCart.ItemPrice;

  let existingItem = document.getElementById("cart" + i);
  let itemHTML = renderCartItem(addToCart, i);

  if (existingItem) {
    existingItem.innerHTML = itemHTML;
  }

  updateShopingCartHeader();
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
  // Setzt die Mengen und Preise im Menü zurück
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
    shoppingCartExit();
    alert("Vielen Dank für Ihre Bestellung!");
  }
}

