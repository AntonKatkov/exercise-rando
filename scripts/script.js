function Start() {
  load(); // Load menu and basketMenu from localStorage
  render(); // Render menu
  renderCartItems(); // Render cart items
}



  // Eventlistener für Buy-Button
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


function remove(i) {
  let itemIndex = basketMenu.findIndex(item => item.ItemName === basketMenu[i].ItemName);
  if (itemIndex !== -1) {
      if (basketMenu[itemIndex].amount > 1) {
          basketMenu[itemIndex].amount--;
          basketMenu[itemIndex].totalPrice = basketMenu[itemIndex].amount * basketMenu[itemIndex].ItemPrice;
          updateCartItemHTML(basketMenu[itemIndex], itemIndex);
      } else {
          basketMenu.splice(itemIndex, 1);
          removeCartItemHTML(itemIndex);
      }
  }
  save();
  renderCartItems();
}




function addItems(i) {
  let itemIndex = basketMenu.findIndex(item => item.ItemName === basketMenu[i].ItemName);
  if (itemIndex !== -1) {
      basketMenu[itemIndex].amount++;
      basketMenu[itemIndex].totalPrice = basketMenu[itemIndex].amount * basketMenu[itemIndex].ItemPrice;
      updateCartItemHTML(basketMenu[itemIndex], itemIndex);
  }
  save();
}




function addToCartItem(i) {
  let itemInBasket = basketMenu.find(item => item.ItemName === menu[i].ItemName);
  if (itemInBasket) {
    updateCartItem(itemInBasket, 1); // Update the existing item in the basket
  } else {
    basketMenu.push({
      ItemName: menu[i].ItemName,
      ItemPrice: menu[i].ItemPrice,
      description: menu[i].description,
      img: menu[i].img,
      amount: 1,
      totalPrice: menu[i].ItemPrice,
    });
    console.log("Neues Element hinzugefügt:", basketMenu[basketMenu.length - 1]); // Debugging
    updateCartItemHTML(basketMenu[basketMenu.length - 1], basketMenu.length - 1); // HTML für das letzte Element aktualisieren
  }
  showPlusOne();
  save();
}



function updateCartItem(item, amount) {
  item.amount += amount; // Die Menge des Elements aktualisieren
  item.totalPrice = item.amount * item.ItemPrice; // Den Gesamtpreis aktualisieren

  if (item.amount === 0) {
    removeCartItemHTML(basketMenu.indexOf(item)); // Element aus dem Warenkorb entfernen
    basketMenu.splice(basketMenu.indexOf(item), 1); // Element aus dem Array entfernen
  } else {
    updateCartItemHTML(item, basketMenu.indexOf(item)); // HTML für das aktualisierte Element aktualisieren
  }


  save(); // Speichern im localStorage
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
  let cartContainer = document.getElementById("shoppingCart");
  cartContainer.innerHTML = ""; // Clear the existing content

  for (let i = 0; i < basketMenu.length; i++) {
    let item = basketMenu[i];
    cartContainer.innerHTML += renderCartItem(item, i);
  }
}





function shoppingCartExit() {
  for (let i = 0; i < basketMenu.length; i++) {
    basketMenu[i].amount = 0;
    basketMenu[i].totalPrice = 0;
  }

  let shoppingCart = document.getElementById("shoppingCartList");
  shoppingCart.innerHTML = shopRender(); // Funktion shopRender() muss definiert werden oder verwendet werden, um den Einkaufswagen zu rendern
}

function buy() {
  let totalPrice = 0;
  for (let i = 0; i < basketMenu.length; i++) {
    totalPrice += basketMenu[i].totalPrice;
  }

  if (totalPrice < 15) {
    alert(
      "Sie haben noch keine Artikel ausgewählt. Mindestbestellwert beträgt 10 €."
    );
  } else {
    alert("Vielen Dank für Ihre Bestellung!");
    clearBasket();
    shoppingCartExit();
    closeCart();
    
  }
}



function clearBasket() {
  basketMenu = [];
  menu.forEach(item => {
    item.amount = 0;
    item.totalPrice = 0;
  });
  save(); // Speichern im localStorage
  renderCartItems(); // Warenkorb neu rendern
}






















function showPlusOne() {
  const plusOneElement = document.getElementById("plusOne");
  plusOneElement.classList.add("show");

  setTimeout(() => {
    plusOneElement.classList.remove("show");
  }, 1000); // 1 Sekunde anstatt 30 Sekunden
}

























function save() {
  localStorage.setItem("basketMenu", JSON.stringify(basketMenu));
  localStorage.setItem("menu", JSON.stringify(menu));
}


function load() {
  let basketMenuAsText = localStorage.getItem("basketMenu");
  let menuAsText = localStorage.getItem("menu");

  if (basketMenuAsText) {
    basketMenu = JSON.parse(basketMenuAsText);
  }

  if (menuAsText) {
    menu = JSON.parse(menuAsText);
  }

  render(); // Menü neu rendern
  updateShopingCartHeader(); // Warenkorb-Header aktualisieren
  renderCartItems(); // Warenkorbartikel neu rendern
}


