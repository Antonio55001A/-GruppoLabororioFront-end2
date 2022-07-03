var carrello = JSON.parse(localStorage.getItem("carrello"));
var quantita = JSON.parse(localStorage.getItem("quantita"));
var report = JSON.parse(localStorage.getItem("report"));
mostra();
function mostra() {
  if (carrello != null) {
    let pagina = document.getElementById("carrello");
    while (pagina.firstChild) {
      pagina.removeChild(pagina.firstChild);
    }
    let opzioni = document.getElementById("opzioni");
    opzioni.style.display = "block";
    let totale = 0;
    for (let i = 0; i < carrello.length; i++) {
      let riquadro = document.createElement("div");
      /*
      <div class="prodotto">
        <div class="imgContainer">
          <img class="imgCanzone" src="/all-files/immagini/colore-acrilico-arancione.jpg" width="45px" height="45px">
        </div>
        <div class="datiCanzone">
          <h4 class="nome">Entro in Pass</h4>
          <h5 class="artistaCanzone">Il pagante</h5>
        </div>
        <div class="icon">
          <h5 class="prezzoCanzone">12€</h5>
          <img class="icon-remove" src="/all-files/immagini/58f9a678880eaf839daef69905721457.png" width="30px" height="30px"></div>
      </div>
      */
      riquadro.setAttribute("class", "prodotto");
      riquadro.innerHTML =
        "<div class='imgContainer'><img width='45px' height='45px' class='imgCanzone' src=" +
        carrello[i].url +
        "></div><div class='datiCanzone'><h4 class='nome'>" +
        carrello[i].canzone +
        "</h4><h5 class='artistaCanzone'>" +
        carrello[i].artista +
        "</h5></div><div class='icon'><h5 class='prezzoCanzone'>" +
        parseFloat(carrello[i].prezzo).toFixed(2) +
        "€</h5><input type='number' id='" +
        i +
        "' min=1 pattern='d*' onchange='cambiaQuantita(" +
        i +
        ")' value=" +
        JSON.parse(quantita[i]) +
        "><img class='icon-remove' src='/all-files/immagini/58f9a678880eaf839daef69905721457.png' width='30px' height='30px' onclick='rimuovi(" +
        i +
        ")'></div>";
      pagina.appendChild(riquadro);
      totale += quantita[i] * carrello[i].prezzo;
    }
    totale = parseFloat(totale).toFixed(2);
    let riquadroTotale = document.getElementById("totale");
    if (carrello.length != 0) {
      riquadroTotale.innerHTML = "Totale: " + totale + "€";
    } else {
      riquadroTotale.innerHTML = "Il carrello è vuoto";
      opzioni.style.display = "none";
    }
  }
}
function rimuovi(num) {
  carrello.splice(num, 1);
  quantita.splice(num, 1);
  reimposta();
}
function svuota() {
  carrello = [];
  quantita = [];
  reimposta();
}
function reimposta() {
  localStorage.setItem("carrello", JSON.stringify(carrello));
  localStorage.setItem("quantita", JSON.stringify(quantita));
  mostra();
}
function cambiaQuantita(i) {
  quantita[i] = parseInt(document.getElementById(i).value);
  localStorage.setItem("quantita", JSON.stringify(quantita));
  mostra();
}
function acquista() {
  for (let i = 0; i < carrello.length; i++) {
    carrello[i].quantita = quantita[i];
  }
  report.push(carrello);
  localStorage.setItem("report", JSON.stringify(report));
  svuota();
  alert("Acquisto effettuato");
}
