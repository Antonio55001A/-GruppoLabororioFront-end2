var lista = JSON.parse(localStorage.getItem("lista"));
if (lista == null) {
  var lista = [];
}
mostra();
function mostra() {
  if (lista != null) {
    let pagina = document.getElementById("lista");
    while (pagina.firstChild) {
      pagina.removeChild(pagina.firstChild);
    }
    for (let i = 0; i < lista.length; i++) {
      let riquadro = document.createElement("div");
      riquadro.innerHTML =
        "<p>Nome: " +
        lista[i].nome +
        "</p><p>Artista: " +
        lista[i].artista +
        "</p><p>Prezzo: " +
        lista[i].prezzo +
        "€</p>";
      let rimuovi = document.createElement("button");
      rimuovi.setAttribute("onclick", "rimuovi(" + i + ")");
      rimuovi.setAttribute("id", i);
      rimuovi.innerHTML = "Rimuovi";
      riquadro.append(rimuovi);
      riquadro.innerHTML += "<hr>";
      pagina.appendChild(riquadro);
    }
  }
}
function aggiungi() {
  let nome = document.getElementById("nome").value;
  let artista = document.getElementById("artista").value;
  let prezzo = document.getElementById("prezzo").value;
  let canzone = {
    nome: nome,
    artista: artista,
    prezzo: prezzo,
  };
  lista.push(canzone);
  reimposta();
}
function rimuovi(num) {
  lista.splice(num, 1);
  reimposta();
}
function svuota() {
  lista = [];
  reimposta();
}
function reimposta() {
  localStorage.setItem("lista", JSON.stringify(lista));
  mostra();
}
