function returnHTML(menuliste, i) {
  return /*html*/ `
            <div class="test" id="menu${i}">
            <div onclick="add(${i})" class="add" role="button">+</div>
            <img src=${menuliste.img} alt="">
            <div class="test1">
            <span class="test2"><h2>${menuliste.ItemName}</span></h2>
            <span class="test2">${menuliste.description}</span>
                <span class="test2"><h3>${menuliste.ItemPrice.toFixed(
                  2
                ).replace(/\./, ",")} €<h3></span>

            </div>
            </div>
            `;
}

function renderCard(addToCart ,i) {
  return /*html*/ `
  <div id="cart${i}">
  <span class="cartAmount">Menu ${i+1}</span>
          <div class="cartItemList">
            <div class="cartNames">
              <span class="cartItemName">${addToCart.ItemName}</span>
              <span class="cartItemPrice">${addToCart.ItemPrice} €</span>
            </div>

            <div class="cartContent">
              <div onclick="remove(${i})" class="cartItemRemove" role="button">-</div>
              <span class="cartAmount">${addToCart.ammount}</span>
              <div onclick="addItems(${i})" class="cartItemRAdd" role="button">+</div>
            </div>
            </div>
    `;
}
