var report = JSON.parse(localStorage.getItem("report"));
mostra();
function mostra() {
  let carrelli = document.getElementById("carrelli");
  if (report == null || report.length == 0) {
    carrelli.innerHTML = "Non è stato effettuato nessun acquisto";
  } else {
    for (let i = 0; i < report.length; i++) {
      let carrello = document.createElement("div");
      carrello.innerHTML = "<h3>Carrello #" + parseInt(i + 1) + "</h3>";
      carrello.setAttribute("id", i);
      for (let j = 0; j < report[i].length; j++) {
        let carrelloAttuale = report[i];
        let canzone = document.createElement("div");
        canzone.innerHTML =
          "<div class='img'><img src='" +
          carrelloAttuale[j].url +
          "' width='50px' height='50px'></div><div class='title-artist-nameAlbum'><h4 class='title-of-songs'>" +
          carrelloAttuale[j].canzone +
          "</h4><h5 class='name-of-artista'>" +
          carrelloAttuale[j].artista +
          "</h5></div><div class='add-to-cart'><span class='price'>" +
          parseFloat(carrelloAttuale[j].prezzo).toFixed(2) +
          "€</span>";
        carrello.appendChild(canzone);
      }
      carrello.innerHTML += "<hr>";
      carrelli.append(carrello);
    }
  }
}
