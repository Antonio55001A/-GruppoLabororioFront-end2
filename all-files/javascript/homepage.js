var canzoni = JSON.parse(localStorage.getItem("canzoni"));
mostra();
function mostra() {
  if (canzoni != null) {
    let pagina = document.getElementById("container-stories-reel-stanze");
    while (pagina.firstChild) {
      pagina.removeChild(pagina.firstChild);
    }
    for (let i = 0; i < canzoni.length; i++) {
      let riquadro = document.createElement("div");
      riquadro.setAttribute("class", "gruppo");
      riquadro.innerHTML =
        "<div class='img'><img class='icon-row-menu' src=" +
        canzoni[i].url +
        "></div><div <span class='text-storie'>Prezzo: " +
        canzoni[i].prezzo +
        "€</span>";
      pagina.appendChild(riquadro);
    }
  }
}

/*<span class='text-storie'> Nome: " +
        canzoni[i].canzone +
        "</span><span class='text-storie'>Artista: " +
        canzoni[i].artista +
        "</span>*/
