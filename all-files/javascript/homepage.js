var canzoni = JSON.parse(localStorage.getItem("canzoni"));
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
        "'></div><div <span class='text-storie'>" +
        filtroCanzoni[i].prezzo +
        "€</span>";
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
/*
<span class='text-storie'> Nome: " +
canzoni[i].canzone +
"</span><span class='text-storie'>Artista: " +
canzoni[i].artista +
"</span>
*/
