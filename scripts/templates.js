function returnHTML(menuliste, i) {
  return /*html*/ `
    <div class="test" id="menu${i}">
      <div onclick="addToCartItem(${i})" class="add" role="button">+</div>
      <img src=${menuliste.img} alt="">
      <div class="test1">
        <span class="test2"><h2>${menuliste.ItemName}</h2></span>
        <span class="test2 desktop-show">${menuliste.description}</span>
        <span class="test2"><h3>${menuliste.ItemPrice.toFixed(2).replace(/\./, ",")} €</h3></span>
      </div>
    </div>
  `;
}


function renderCartHeader(totalPrice) {
  let subtotal = totalPrice.toFixed(2).replace(".", ",");
  return /*html*/ `
    <div id="display" class="shoppingCartHeader">
      <span class="name">
        <img class="shopingbag" src="img/backpng.png" alt="" />WarenKorb
      </span>
      <div class="subtotal">
        <span>Min: 10,00€</span>
        <span>Zwischensumme: ${subtotal} €</span>
        <span>Lieferkosten: 5 €</span>
        <span>Total: ${(totalPrice + 5).toFixed(2).replace(".", ",")} €</span>
        <div role="button" class="buybutton" onclick="buy()">Kaufen</div>
      </div>
    </div>
  `;
}


function shopRender() {
  let totalPrice = 0;
  for (let i = 0; i < basketMenu.length; i++) { // Hier basketMenu verwenden
    totalPrice += basketMenu[i].totalPrice;
  }
  return /*html*/ `
    <div id="shopCart" class="shoppingCart">
      ${renderCartHeader(totalPrice)}
      <div id="shoppingCart">
        ${renderCartItems()}
      </div>
    </div>
  `;
}


function renderCartItem(addToCart, i) {
  let totalPrice = addToCart.amount * addToCart.ItemPrice;
  return /*html*/ `
    <div id="cart${i}" class="cartItemList">
      <div class="cartNames">
        <span class="cartItemName">${addToCart.amount} ${addToCart.ItemName}</span> 
        <span class="cartItemPrice">${totalPrice.toFixed(2).replace(".", ",")} €</span>
      </div>
      <div class="cartContent">
        <div onclick="remove(${i})" class="cartItemRemove" role="button">-</div>
        <span class="cartAmount">${addToCart.amount}</span> 
        <div onclick="addItems(${i})" class="cartItemAdd" role="button">+</div>
      </div>
    </div>
  `;
}

