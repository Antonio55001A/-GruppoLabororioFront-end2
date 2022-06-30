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
      riquadro.setAttribute("class", "prodotto");
      riquadro.innerHTML =
        "<div class='imgContainer'><img class='imgCanzone' src=" +
        canzoni[i].url +
        "></div><div class='datiCanzone'><h4 class='nome'>Nome: " +
        canzoni[i].canzone +
        "</h4><h5 class='artistaCanzone'>Artista: " +
        canzoni[i].artista +
        "</h5><h5 class='prezzoCanzone'>Prezzo: " +
        canzoni[i].prezzo +
        "€</h5></div>";
      let rimuovi = document.createElement("div");
      rimuovi.setAttribute("onclick", "rimuovi(" + i + ")");
      rimuovi.setAttribute("class", "rimuoviCanzone");
      rimuovi.setAttribute("id", i);
      rimuovi.innerHTML = "<img src='../immagini/cancel.png'>";
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
