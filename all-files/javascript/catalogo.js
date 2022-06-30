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
mostra();
function mostra() {
  if (canzoni != null) {
    let pagina = document.getElementById("canzoni");
    while (pagina.firstChild) {
      pagina.removeChild(pagina.firstChild);
    }
    let filtroCanzoni = [...canzoni];
    let filtroArtista = document.getElementById("artista").value;
    if (filtroArtista !== "qualsiasi") {
      filtroCanzoni = canzoni.filter(
        (canzone) => canzone.artista === filtroArtista
      );
    }
    let filtroGenere = document.getElementById("genere").value;
    if (filtroGenere !== "qualsiasi") {
      filtroCanzoni = canzoni.filter(
        (canzone) => canzone.genere === filtroGenere
      );
    }
    let filtroAnno = document.getElementById("anno").value;
    if (filtroAnno !== "qualsiasi") {
      filtroCanzoni = canzoni.filter((canzone) => canzone.anno == filtroAnno);
    }
    for (let i = 0; i < filtroCanzoni.length; i++) {
      let riquadro = document.createElement("div");
      riquadro.setAttribute("class", "prodotto");
      riquadro.innerHTML =
        "<div class='imgContainer'><img class='imgCanzone' src=" +
        filtroCanzoni[i].url +
        "></div><div class='datiCanzone'><p>Nome: " +
        filtroCanzoni[i].canzone +
        "</p><p class='artistaCanzone'>Artista: " +
        canzoni[i].artista +
        "</p><p class='prezzoCanzone'>Prezzo: " +
        filtroCanzoni[i].prezzo +
        "€</p></div>";
      let aggiungi = document.createElement("div");
      aggiungi.setAttribute("onclick", "aggiungi(" + i + ")");
      aggiungi.setAttribute("class", "aggiungiCarrello");
      aggiungi.setAttribute("id", i);
      aggiungi.innerHTML = "<img src='../immagini/shopping.png'>";
      riquadro.append(aggiungi);
      pagina.appendChild(riquadro);
    }
  }
}
