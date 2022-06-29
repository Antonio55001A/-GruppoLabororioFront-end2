var canzoni = JSON.parse(localStorage.getItem("canzoni"));
if (canzoni == null) {
  var canzoni = [];
}
mostra();
function mostra() {
  if (canzoni != null) {
    let pagina = document.getElementById("canzoni");
    while (pagina.firstChild) {
      pagina.removeChild(pagina.firstChild);
    }
    for (let i = 0; i < canzoni.length; i++) {
      let riquadro = document.createElement("div");
      riquadro.setAttribute("class", "prodotto-cart");
      riquadro.innerHTML =
        "<div class='img-container'><img class='img-song' src=" +
        canzoni[i].url +
        "></div><div class='date-container'><p>Nome: " +
        canzoni[i].canzone +
        "</p><p class='artist-song'>Artista: " +
        canzoni[i].artista +
        "</p><p class='price-song'>Prezzo: " +
        canzoni[i].prezzo +
        "€</p></div>";
      let rimuovi = document.createElement("div");
      rimuovi.setAttribute("onclick", "rimuovi(" + i + ")");
      rimuovi.setAttribute("class", "cancel-container");
      rimuovi.setAttribute("id", i);
      rimuovi.innerHTML = "<img src='../img/cancel.png'>";
      riquadro.append(rimuovi);
      pagina.appendChild(riquadro);
    }
  }
}
function rimuovi(num) {
  canzoni.splice(num, 1);
  reimposta();
}
function svuota() {
  canzoni = [];
  reimposta();
}
function acquista() {}
function reimposta() {
  localStorage.setItem("canzoni", JSON.stringify(canzoni));
  mostra();
}
