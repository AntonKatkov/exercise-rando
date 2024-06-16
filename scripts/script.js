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
  cartContent.innerHTML += renderCard(addToCart, i);
}

function addItems(i) {

  let addToCart = menu[i];
  addToCart.ammount += 1;

  let cartContent = document.getElementById(`cart${i}`);
  cartContent.innerHTML = renderCard(addToCart, i);
}




//  Konstrollstrukturen

//  if-anweisung

// const mindestalter = 18;
// let benutzer_eingabe = 17;

// if (benutzer_eingabe >= mindestalter) {
//   console.log("Du bist alt genug!");
// }

//  if-else anweisung

// const mindestalter = 18;
// let benutzer_eingabe = 42;

// if (benutzer_eingabe >= mindestalter) {
//   if (benutzer_eingabe == mindestalter) {
//     console.log("Du bist grade alt genug!");
//   } else {
//     console.log("Du bist alt genug!");
//   }
// } else {
//   console.log("Du bist noch nicht alt genug!");
// }

//  else-if anweisung

// if (benutzer_eingabe == mindestalter) {
//   console.log("Du bist grade alt genug!");
// } else if (benutzer_eingabe > mindestalter) {
//   console.log("Du bist alt genug!");
// } else {
//   console.log("Du bist noch nicht alt genug!");
// }
