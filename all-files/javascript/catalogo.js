// Creazione delle opzioni dei filtri
var canzoni = JSON.parse(localStorage.getItem("canzoni"));
if (canzoni == null) {
  var canzoni = [];
} else {
  let artisti = new Set();
  let anni = new Set();
  for (let i = 0; i < canzoni.length; i++) {
    artisti.add(canzoni[i].artista);
    anni.add(canzoni[i].anno);
  }
  artisti = Array.from(artisti).sort();
  anni = Array.from(anni).sort();
  let opzione;
  let selectArtista = document.getElementById("artista");
  for (let i = 0; i < artisti.length; i++) {
    opzione = document.createElement("option");
    opzione.setAttribute("value", artisti[i]);
    opzione.innerHTML = artisti[i];
    selectArtista.appendChild(opzione);
  }
  let selectAnno = document.getElementById("anno");
  for (let i = 0; i < anni.length; i++) {
    opzione = document.createElement("option");
    opzione.setAttribute("value", anni[i]);
    opzione.innerHTML = anni[i];
    selectAnno.appendChild(opzione);
  }
}
// Filtri impostati tramite link
let linkGenere = localStorage.getItem("genere");
if (linkGenere != null) {
  document.getElementById("genere").value = linkGenere;
  localStorage.removeItem("genere");
}
mostra();
function mostra() {
  if (canzoni != null) {
    let pagina = document.getElementById("container-all");
    while (pagina.firstChild) {
      pagina.removeChild(pagina.firstChild);
    }
    let filtroCanzoni = [...canzoni];
    let linkPlaylist = localStorage.getItem("playlist");
    if (linkPlaylist != null) {
      linkPlaylist = linkPlaylist.substring(0, linkPlaylist.length - 4);
      let titolo = document.getElementById("catalogo");
      titolo.innerHTML = linkPlaylist.toUpperCase() + " MUSIC";
      filtroCanzoni = filtroCanzoni.filter(
        (canzone) => canzone.playlist === linkPlaylist
      );
    }
    let filtroArtista = document.getElementById("artista").value;
    if (filtroArtista !== "selected disabled") {
      filtroCanzoni = filtroCanzoni.filter(
        (canzone) => canzone.artista === filtroArtista
      );
    }
    let filtroGenere = document.getElementById("genere").value;
    if (filtroGenere !== "selected disabled") {
      filtroCanzoni = filtroCanzoni.filter(
        (canzone) => canzone.genere === filtroGenere
      );
    }
    let filtroAnno = document.getElementById("anno").value;
    if (filtroAnno !== "selected disabled") {
      filtroCanzoni = filtroCanzoni.filter(
        (canzone) => canzone.anno == filtroAnno
      );
    }
    for (let i = 0; i < filtroCanzoni.length; i++) {
      let riquadro = document.createElement("div");
      /*
      <div class="row-songs">
        <div class="img">
          <img
            src="/all-files/immagini/colore-acrilico-arancione.jpg"
            width="50px"
            height="50px"
          />
        </div>

        <div class="title-artist-nameAlbum">
          <h4 class="title-of-songs">Tomorrowland</h4>
          <h5 class="name-of-artista">Il pagante</h5>
        </div>
        <div class="add-to-cart">
          <span class="price">1.99€</span>
          <img
            id="cart"
            src="/all-files/immagini/add-shopping-cart-icon-301424.png"
            width="40px"
            height="40px"
          />
        </div>
      </div>
      */
      riquadro.setAttribute("class", "row-songs");
      riquadro.innerHTML =
        "<div class='img'><img src='" +
        filtroCanzoni[i].url +
        "' width='50px' height='50px'></div><div class='title-artist-nameAlbum'><h4 class='title-of-songs'>" +
        filtroCanzoni[i].canzone +
        "</h4><h5 class='name-of-artista'>" +
        filtroCanzoni[i].artista +
        "</h5></div><div class='add-to-cart'><span class='price'>" +
        parseFloat(filtroCanzoni[i].prezzo).toFixed(2) +
        "€</span>";
      let aggiungi = document.createElement("img");
      aggiungi.setAttribute(
        "onclick",
        "aggiungiAlCarrello(" + JSON.stringify(filtroCanzoni[i]) + ")"
      );
      aggiungi.setAttribute(
        "src",
        "/all-files/immagini/carello+.png "
      );
      aggiungi.setAttribute("id", "cart");
      aggiungi.setAttribute("width", "100px");
      aggiungi.setAttribute("height", "60px");
      riquadro.append(aggiungi);
      riquadro.innerHTML += "</div>";
      pagina.appendChild(riquadro);
    }
  }
}
