function returnHTML(menuliste, i) {
  return /*html*/ `
            <div class="test" id="menu${i}">
            <div class="add" role="button">+</div>
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
