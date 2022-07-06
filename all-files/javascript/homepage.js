var canzoni = JSON.parse(localStorage.getItem("canzoni"));
var carrello = JSON.parse(localStorage.getItem("carrello"));
let linkPlaylist = localStorage.getItem("playlist");
if (linkPlaylist != null) {
  localStorage.removeItem("playlist");
}
mostra("ita");
mostra("gb");
mostra("arabi");
mostraTop();
function mostra(playlist) {
  if (canzoni != null) {
    let pagina = document.getElementById(playlist);
    while (pagina.firstChild) {
      pagina.removeChild(pagina.firstChild);
    }
    let filtroCanzoni = [...canzoni];
    filtroCanzoni = filtroCanzoni.filter(
      (canzone) => canzone.playlist === playlist
    );
    for (let i = 0; i < filtroCanzoni.length; i++) {
      let riquadro = document.createElement("div");
      riquadro.setAttribute("class", "gruppo");
      riquadro.innerHTML =
        "<div class='img'><img class='icon-row-menu' src='" +
        filtroCanzoni[i].url +
        "'></div><div class='testo-prezzo' <span class='text-storie'>" +
        parseFloat(filtroCanzoni[i].prezzo).toFixed(2) +
        "€</span><img onclick='aggiungiAlCarrello(" +
        JSON.stringify(filtroCanzoni[i]) +
        ")' class='buy-cart' src='/all-files/immagini/add-to-cart-3046 (1).png' width='20px' height='20px'></div>";
      pagina.appendChild(riquadro);
    }
  }
}
function mostraTop() {
  if (canzoni != null) {
    let copiaCanzoni = [...canzoni];
    let topCanzoni = [];
    for (let i = 1; i <= 4; i++) {
      let indice = Math.floor(Math.random() * copiaCanzoni.length);
      topCanzoni.push(copiaCanzoni[indice]);
      copiaCanzoni.splice(indice, 1);
      let topCanzone = document.getElementById(i);
      topCanzone.setAttribute("src", topCanzoni[topCanzoni.length - 1].url);
    }
  }
}
filtroLink("linkGenere", "genere");
filtroLink("linkPlaylist", "playlist");
function filtroLink(id, item) {
  let links = document.getElementsByClassName(id);
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      localStorage.setItem(item, links[i].getAttribute("id"));
    });
  }
}
