var canzoni = JSON.parse(localStorage.getItem("canzoni"));
if (canzoni == null) {
  var canzoni = [];
}
document.getElementById("aggiungi").addEventListener("click", function (event) {
  event.preventDefault();
  if (
    controllo("url") == true &&
    controllo("canzone") == true &&
    controllo("artista") == true &&
    controllo("genere") == true &&
    controllo("playlist") == true &&
    controllo("prezzo") == true
  ) {
    let url = document.getElementById("url").value;
    let canzone = document.getElementById("canzone").value;
    let artista = document.getElementById("artista").value;
    let genere = document.getElementById("genere").value;
    let playlist = document.getElementById("playlist").value;
    let prezzo = document.getElementById("prezzo").value;
    let song = {
      url: url,
      canzone: canzone,
      artista: artista,
      genere: genere,
      playlist: playlist,
      prezzo: prezzo,
    };
    canzoni.push(song);
    localStorage.setItem("canzoni", JSON.stringify(canzoni));
  }
});
function controllo(campo) {
  let valore = document.getElementById(campo).value;
  if (valore == "") {
    return false;
  }
  return true;
}
