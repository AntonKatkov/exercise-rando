function Start() {
  render();
}

function render() {
  let content = document.getElementById("menuPost");
  content.innerHTML = "";

  for (let i = 0; i < menu.length; i++) {
    let menuliste = menu[i];
    content.innerHTML += returnHTML(menuliste, i);
  }
}

function add(i) {
  let addToCart = menu[i];
  addToCart.ammount += 1;

  let cartContent = document.getElementById("shoppingCart");
  let existingItem = document.getElementById("cart" + i);
  if (existingItem) {
    existingItem.outerHTML = renderCard(addToCart, i);
  } else {;
    let newItem = document.createElement("div");
    newItem.id = "cart" + i;
    newItem.innerHTML = renderCard(addToCart, i);
    cartContent.appendChild(newItem);
  }

}

function addItems(i) {
  let addToCart = menu[i];
  addToCart.ammount += 1;
  let cartContent = document.getElementById(`cart${i}`);
  cartContent.innerHTML = renderCard(addToCart, i);
}
function remove(i) {
  let cartContent = document.getElementById(`cart${i}`);
  let addToCart = menu[i];
  addToCart.ammount -= 1;

  if (addToCart.ammount < 1) {
    addToCart.ammount = 0; 
    if (cartContent) {
      cartContent.remove();
    }
  } else {
    if (cartContent) {
      cartContent.innerHTML = renderCard(addToCart, i);
    }
  }

}




