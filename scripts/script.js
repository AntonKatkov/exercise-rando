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
