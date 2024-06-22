function Start() {
  load();
  render();
  renderCartItems();
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
  let item = basketMenu.find(item => item.ItemName === menu[i].ItemName);
  if (item) {
    updateCartItem(item, 1);
  } else {
    addItemToBasket(i);
  }
  showPlusOne();
  save();
  renderCartItems();
}

function addItemToBasket(i) {
  let newItem = {
    ItemName: menu[i].ItemName,
    ItemPrice: menu[i].ItemPrice,
    description: menu[i].description,
    img: menu[i].img,
    amount: 1,
    totalPrice: menu[i].ItemPrice,
  };
  basketMenu.push(newItem);
  updateCartItemHTML(newItem, basketMenu.length - 1);
}

function updateCartItem(item, amount) {
  item.amount += amount;
  item.totalPrice = item.amount * item.ItemPrice;
  if (item.amount === 0) {
    removeItem(item);
  } else {
    updateCartItemHTML(item, basketMenu.indexOf(item));
  }
  save();
  renderCartItems();
}

function removeItem(item) {
  let index = basketMenu.indexOf(item);
  removeCartItemHTML(index);
  basketMenu.splice(index, 1);
}

function addItems(i) {
  let itemIndex = basketMenu.findIndex(item => item.ItemName === basketMenu[i].ItemName);
  if (itemIndex !== -1) {
    basketMenu[itemIndex].amount++;
    basketMenu[itemIndex].totalPrice = basketMenu[itemIndex].amount * basketMenu[itemIndex].ItemPrice;
    updateCartItemHTML(basketMenu[itemIndex], itemIndex);
  }
  save();
  renderCartItems();
}

function remove(i) {
  let itemIndex = basketMenu.findIndex(item => item.ItemName === basketMenu[i].ItemName);
  if (itemIndex !== -1) {
    updateOrRemoveItem(itemIndex);
  }
  save();
  renderCartItems();
}

function updateOrRemoveItem(index) {
  if (basketMenu[index].amount > 1) {
    basketMenu[index].amount--;
    basketMenu[index].totalPrice = basketMenu[index].amount * basketMenu[index].ItemPrice;
    updateCartItemHTML(basketMenu[index], index);
  } else {
    basketMenu.splice(index, 1);
    removeCartItemHTML(index);
  }
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

function removeCartItemHTML(i) {
  let existingItem = document.getElementById("cart" + i);
  if (existingItem) {
    existingItem.remove();
  }
}


function renderCartItems() {
  let cartContainer = document.getElementById("shoppingCart");
  cartContainer.innerHTML = "";

  let totalPrice = basketMenu.reduce((sum, item) => sum + item.totalPrice, 0);
  cartContainer.innerHTML = renderCartHeader(totalPrice);

  for (let i = 0; i < basketMenu.length; i++) {
    let item = basketMenu[i];
    cartContainer.innerHTML += renderCartItem(item, i);
  }
}

function shoppingCartExit() {
  basketMenu.forEach(item => {
    item.amount = 0;
    item.totalPrice = 0;
  });
  document.getElementById("shoppingCartList").innerHTML = shopRender();
}

function buy() {
  let totalPrice = basketMenu.reduce((sum, item) => sum + item.totalPrice, 0);

  if (totalPrice < 10) {
    alert("Der Mindestbestellwert beträgt 10 €.");
  } else {
    alert("Vielen Dank für Ihre Bestellung!");
    clearBasket();
    closeCart();
  }
}

function clearBasket() {
  basketMenu = [];
  menu.forEach(item => {
    item.amount = 0;
    item.totalPrice = 0;
  });
  save();
  renderCartItems();
}

function showPlusOne() {
  const plusOneElement = document.getElementById("plusOne");
  plusOneElement.classList.add("show");

  setTimeout(() => {
    plusOneElement.classList.remove("show");
  }, 1000);
}

function save() {
  localStorage.setItem("basketMenu", JSON.stringify(basketMenu));
  localStorage.setItem("menu", JSON.stringify(menu));
}

function load() {
  let basketMenuAsText = localStorage.getItem("basketMenu");
  let menuAsText = localStorage.getItem("menu");

  if (basketMenuAsText) basketMenu = JSON.parse(basketMenuAsText);
  if (menuAsText) menu = JSON.parse(menuAsText);

  render();
  renderCartItems();
}
