var report = JSON.parse(localStorage.getItem("report"));
MostraRighe();
function MostraRighe(){
  let carrelli = document.getElementById("carrelli");
  if (report == null || report.length == 0) {
    carrelli.innerHTML = "Non è stato effettuato nessun acquisto";
  } else {
    let media=0;
    for (let i = 0; i < report.length; i++) {
      let totale=0;
      let prodotti=0;
      let carrelloAttuale=report[i];
      for (let j = 0; j < carrelloAttuale.length; j++) {
        totale+=carrelloAttuale[j].prezzo*carrelloAttuale[j].quantita;
        prodotti+=carrelloAttuale[j].quantita;
      }
      media+=totale;
      let carrello = document.createElement("div");
      carrello.setAttribute('class','riga-iniziale');
      carrello.innerHTML = "<div class='elem'><h3>#" +
       parseInt(i + 1) +
        "</h3><img class='icona' id='freccia"+(i)+"' src='/all-files/immagini/freccia-in-basso.png'>"+
       " '</div><div class='elem'><h3 class'tot'>"+
        parseFloat(totale).toFixed(2) +
        "€</h3></div><div class=elem'><h3 class='prodotti'>"+
        prodotti+
        "</h3></div><hr>";
      carrello.setAttribute("id", i);
      carrelli.append(carrello);
      let rigaHr=document.createElement("hr");
      rigaHr.setAttribute("id","riga"+i);
      carrelli.append(rigaHr);
    }
    media/=report.length;
    document.getElementById("media").innerHTML=parseFloat(media).toFixed(2)+"€";
  }
}
mostraDettagli();
function mostraDettagli(){
  let frecce=document.getElementsByClassName("icona");
  for (let i = 0; i < frecce.length; i++) {
    frecce[i].addEventListener("click",function(){
      mostraCarrello(i);
    });
  }
}
function mostraCarrello(i) {
  let carrelloAttuale=report[i];
  let frecciaCliccata=document.getElementById("freccia"+i);
  if(frecciaCliccata.getAttribute("src")==="/all-files/immagini/freccia-in-basso.png"){
    frecciaCliccata.setAttribute("src","/all-files/immagini/freccia-in-su.png");
    let rigaAttuale=document.getElementById("riga"+i);
    while(rigaAttuale.firstChild){
      rigaAttuale.removeChild(rigaAttuale.firstChild);
    }
    let carrello = document.createElement("div");
    carrello.setAttribute('class','riga-carrelli');
    carrello.setAttribute("id", "carrello"+i);
    for (let j = 0; j < carrelloAttuale.length; j++) {
      let canzone = document.createElement("div");
      canzone.setAttribute("class","carrello-prodotti");
        canzone.innerHTML =
          "<div class='img'><img src='" +
          carrelloAttuale[j].url +
          "' width='50px' height='50px'></div><div class='title-artist-nameAlbum'><h4 class='title-of-songs'>" +
          carrelloAttuale[j].canzone +
          "</h4><h5 class='name-of-artista'>" +
          carrelloAttuale[j].artista +
          "</h5></div><div class='add-to-cart'><span class='price'>Prezzo: " +
          parseFloat(carrelloAttuale[j].prezzo).toFixed(2) +
          "€</span></div><div class='quantita'>Quantità: " +
          carrelloAttuale[j].quantita +
        "</div>";
      carrello.appendChild(canzone);
    }
    rigaAttuale.append(carrello);
  }else{
    frecciaCliccata.setAttribute("src","/all-files/immagini/freccia-in-basso.png");
    document.getElementById("carrello"+i).style.display="none";
  }
}