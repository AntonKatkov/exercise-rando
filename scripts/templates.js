function returnHTML(menuliste, i) {
  return /*html*/ `
            <div class="test" id="menu${i}">
            <div onclick="addToCartItem(${i})" class="add" role="button">+</div>
            <img src=${menuliste.img} alt="">
            <div class="test1">
            <span class="test2"><h2>${menuliste.ItemName}</span></h2>
            <span class="test2 desktop-show">${menuliste.description}</span>
                <span class="test2"><h3>${menuliste.ItemPrice.toFixed(
                  2
                ).replace(/\./, ",")} €<h3></span>

            </div>
            </div>

            `;
}
function renderCartHeader(totalPrice) {
  let subtotal = totalPrice.toFixed(2).replace(".", ",");
  return /*html*/ `
    <div id="display" class="shoppingCartHeader mobile-hide">
    <span class="close" onclick="closeCart()">&times;</span>
      <span class="name">
        <img class="shopingbag"  src="img/backpng.png" alt="" />WarenKorb
      </span>

      <span>Min: 10,00€</span>
      <span>Zwischensumme: ${subtotal} €</span>
      <span>Lieferkosten: 5 €</span>
      <span>Total: ${(totalPrice + 15).toFixed(2).replace(".", ",")} €</span>
      <div role="button" class="buybutton" onclick="buy()">Kaufen</div>
    </div>
  `;
}
function shopRender() {
  let totalPrice = 0;
  for (let i = 0; i < menu.length; i++) {
    totalPrice += menu[i].totalPrice;
  }

  return /*html*/ `
    <div class="shoppingCart mobile-hide">
      ${renderCartHeader(totalPrice)}
      <div id="shoppingCart">
        ${renderCartItems()}
      </div>
    </div>

  `;
}

function renderCartItem(addToCart, i) {
  let totalPrice = addToCart.ammount * addToCart.ItemPrice;
  return /*html*/ `
    <div id="cart${i}" class="cartItemList">
      <div class="cartNames">
        <span class="cartItemName">${addToCart.ammount} ${
    addToCart.ItemName
  }</span>
        <span class="cartItemPrice">${totalPrice
          .toFixed(2)
          .replace(".", ",")} €</span>
      </div>
      <div class="cartContent">
        <div onclick="remove(${i})" class="cartItemRemove" role="button">-</div>
        <span class="cartAmount">${addToCart.ammount}</span>
        <div onclick="addItems(${i})" class="cartItemRAdd" role="button">+</div>
      </div>
    </div>
  `;
}
