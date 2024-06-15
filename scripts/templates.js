function returnHTML(menuliste, i) {
  return /*html*/ `
            <div class="test" id="menu${i}">
            <span class="add" role="button">+</span>
            <div class="test1">
            <span class="test2"><h3>${menuliste.ItemName}</span></h3>
            <span class="test2">${menuliste.description}</span>
                <span class="test2">${menuliste.ItemPrice.toFixed(2).replace(
                  /\./,
                  ","
                )} €</span>

            </div>
            </div>
            `;
}
