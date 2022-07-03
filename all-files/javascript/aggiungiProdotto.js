var canzoni = JSON.parse(localStorage.getItem("canzoni"));
document.getElementById("aggiungi").addEventListener("click", function (event) {
  event.preventDefault();
  for (let i = 0; i < canzoni.length; i++) {
    if (
      canzoni[i].canzone == document.getElementById("canzone").value &&
      canzoni[i].artista == document.getElementById("artista").value
    ) {
      alert("La canzone è già stata inserita nel catalogo");
      return;
    }
  }
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
    alert("La canzone è stata aggiunta al catalogo");
  } else {
    alert("I campi non sono stati riempiti");
  }
});
function controllo(campo) {
  let valore = document.getElementById(campo).value;
  if (valore == "") {
    return false;
  }
  return true;
}
