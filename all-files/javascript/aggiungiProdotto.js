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
    controllo("anno") == true &&
    controllo("genere") == true &&
    controllo("playlist") == true &&
    controllo("prezzo") == true
  ) {
    let canzone = {
      url: document.getElementById("url").value,
      canzone: document.getElementById("canzone").value,
      artista: document.getElementById("artista").value,
      anno: document.getElementById("anno").value,
      descrizione: document.getElementById("descrizione").value,
      genere: document.getElementById("genere").value,
      playlist: document.getElementById("playlist").value,
      prezzo: document.getElementById("prezzo").value,
    };
    canzoni.push(canzone);
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
