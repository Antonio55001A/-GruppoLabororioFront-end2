// Lista delle canzoni presenti nel catalogo
var canzoni = JSON.parse(localStorage.getItem("canzoni"));
if (canzoni == null) {
  var canzoni = [];
  canzoni.push({
    url: "https://antongorlin.com/wp-content/gallery/ocean-pictures/mahon-pool-orange-sunrise.jpg",
    canzone: "Criminal Of A Chance",
    artista: "Bobbie Gray",
    anno: 2009,
    descrizione: "",
    genere: "hip-hop",
    playlist: "gb",
    prezzo: 1.99,
  });
  canzoni.push({
    url: "https://images.unsplash.com/photo-1591827205058-9ffc033010fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZSUyMG9uJTIwdGhlJTIwc2VhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    canzone: "Freedom And Angel",
    artista: "Philip Miles",
    anno: 2021,
    descrizione: "",
    genere: "jazz",
    playlist: "gb",
    prezzo: 0.99,
  });
  canzoni.push({
    url: "https://cdn.artphotolimited.com/images/57b852d10ba499004eb40392/1000x1000/kite-sunset.jpg",
    canzone: "I Hope I Know How To Get Away",
    artista: "Dannie James",
    anno: 2019,
    descrizione: "",
    genere: "rock",
    playlist: "gb",
    prezzo: 0.49,
  });
  canzoni.push({
    url: "https://img.apmcdn.org/85de879c11543275ba870e55fb2558785486d661/square/4606e5-20171205-stormovervegas.jpg",
    canzone: "Mystery Of The Perfect Storm",
    artista: "Brian Tanner",
    anno: 2004,
    descrizione: "",
    genere: "house",
    playlist: "gb",
    prezzo: 0.99,
  });
  canzoni.push({
    url: "https://www.travelandleisure.com/thmb/68F-3WryoMlwv2FJtBn29PqBX28=/1000x1000/smart/filters:no_upscale()/grand-canyon-MILKYWAY0719-253ee5091a2644e1afdcb2b5dabd851a.jpg",
    canzone: "Fight Of Freedom",
    artista: "Travis Graves",
    anno: 2013,
    descrizione: "",
    genere: "pop",
    playlist: "gb",
    prezzo: 1.49,
  });
  canzoni.push({
    url: "https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://images.citybreak.com/image.aspx%3FImageId%3D6648092",
    canzone: "I Got It",
    artista: "Gary Dawn",
    anno: 2017,
    descrizione: "",
    genere: "techno",
    playlist: "gb",
    prezzo: 0.99,
  });
  canzoni.push({
    url: "https://shayarimaza.com/files/boys-dp-images/sad-boy-dp-images/Alone-Sad-boy-Dp.jpg",
    canzone: "Memories For Yesterday",
    artista: "Andrew Gibbs",
    anno: 2001,
    descrizione: "",
    genere: "rock",
    playlist: "gb",
    prezzo: 0.49,
  });
  canzoni.push({
    url: "https://www.frontgate.com/homeplusstyle/wp-content/uploads/ArizonaOasis_1.jpg",
    canzone: "Crazy For My Cadillac",
    artista: "Charles Stevens",
    anno: 2012,
    descrizione: "",
    genere: "rap",
    playlist: "gb",
    prezzo: 0.99,
  });
  canzoni.push({
    url: "https://tcdn.storeden.com/gallery/6197975c5fb8e09257824b9f",
    canzone: "Voices Of Fire",
    artista: "Criss Stark",
    anno: 2008,
    descrizione: "",
    genere: "pop",
    playlist: "gb",
    prezzo: 1.49,
  });
  canzoni.push({
    url: "https://viaggiatore.net/wp-content/uploads/2019/01/The-Wave-in-Arizona-rocky-desert-rock-formation-.jpg",
    canzone: "Crossroads Of Her Broken Dreams",
    artista: "Marcus Wilde",
    anno: 2007,
    descrizione: "",
    genere: "rock",
    playlist: "arabi",
    prezzo: 0.99,
  });
  canzoni.push({
    url: "https://www.brilliance.com/sites/default/files/engagement-rings/1-mm-round-diamond/1000x1000/1mm-round-diamond-premium-melee-diamonds-version1.jpg",
    canzone: "Time Of Your Story",
    artista: "Bruce Arthur",
    anno: 2019,
    descrizione: "",
    genere: "techno",
    playlist: "arabi",
    prezzo: 0.99,
  });
  canzoni.push({
    url: "https://visitfranklin.com/wp-content/uploads/2020/08/59-OldCityCemetery-1000x1000.jpg",
    canzone: "Honey, We've Only Just Begun",
    artista: "Jimmy Shawn",
    anno: 2013,
    descrizione: "",
    genere: "pop",
    playlist: "arabi",
    prezzo: 1.99,
  });
  canzoni.push({
    url: "https://images.squarespace-cdn.com/content/v1/547aeee3e4b0780d55c0fe36/1431012728047-NAKE3Z7NASTW8HKKFFS2/image-asset.jpeg?format=1000w",
    canzone: "Just A Light Diamonds",
    artista: "Marcus Wilde",
    anno: 2015,
    descrizione: "",
    genere: "pop",
    playlist: "arabi",
    prezzo: 1.49,
  });
  canzoni.push({
    url: "https://throneandvine.com/wp-content/uploads/2020/09/sudtriol-autumn.jpg",
    canzone: "Hold Me",
    artista: "Jimmy Shawn",
    anno: 2008,
    descrizione: "",
    genere: "rock",
    playlist: "arabi",
    prezzo: 0.99,
  });
  canzoni.push({
    url: "https://cdn.shopify.com/s/files/1/2177/2669/products/iva_rusinova_5_1024x1024.jpg?v=1644936249",
    canzone: "Wind Of summer air",
    artista: "Gary Dawn",
    anno: 2005,
    descrizione: "",
    genere: "techno",
    playlist: "arabi",
    prezzo: 1.49,
  });
  canzoni.push({
    url: "https://www.menkind.co.uk/media/catalog/product/cache/84a9762dea65cd4d66747ad9a34bdb64/8/6/86910-gliding-with-a-winch-luanch-experience-w1.jpg",
    canzone: "Remember Tomorrow",
    artista: "Bruce Arthur",
    anno: 2007,
    descrizione: "",
    genere: "rap",
    playlist: "arabi",
    prezzo: 1.99,
  });
  canzoni.push({
    url: "https://oxalisadventure.com/uploads/2021/08/bannermobile2-(1000x1000)__637645255040453341.jpg",
    canzone: "Winter Eruption",
    artista: "Bruce Arthur",
    anno: 2014,
    descrizione: "",
    genere: "jazz",
    playlist: "arabi",
    prezzo: 0.99,
  });
  canzoni.push({
    url: "https://www.moodart.com/wp-content/uploads/2021/11/fashion-photography-moodart-02.jpg",
    canzone: "Polaroid",
    artista: "Paola Brambilla",
    anno: 2021,
    descrizione: "",
    genere: "napoli",
    playlist: "ita",
    prezzo: 0.49,
  });
  canzoni.push({
    url: "https://www.yorkshirewildlifepark.com/media/ii0kdyhq/polar-bear.jpg?crop=0.33333333333333331,0,0,0&cropmode=percentage&width=1000&height=1000&rnd=132884434928000000",
    canzone: "Senza fare rumore",
    artista: "Tommaso Fabbri",
    anno: 2006,
    descrizione: "",
    genere: "rock",
    playlist: "ita",
    prezzo: 1.49,
  });
  canzoni.push({
    url: "https://www.photocircle.net/it/public/uploads/photos/thumbnail_1000x1000/79052-Elefantenmutter-mit-Baby--by-dennis-wehrmann.jpg",
    canzone: "Caos",
    artista: "Paola Brambilla",
    anno: 2015,
    descrizione: "",
    genere: "pop",
    playlist: "ita",
    prezzo: 0.99,
  });
  canzoni.push({
    url: "https://www.keblog.it/wp-content/uploads/2016/09/caimano-coccodrillo-farfalle-testa-bevono-lacrime-1.jpg",
    canzone: "Lacrime",
    artista: "Matteo Mancini",
    anno: 2009,
    descrizione: "",
    genere: "rap",
    playlist: "ita",
    prezzo: 0.49,
  });
  canzoni.push({
    url: "https://www.travelandleisure.com/thmb/tDIQZwYYIsfVOadLa94bYeWLquU=/1000x1000/smart/filters:no_upscale()/rainbow-river-cano-cristales-colombia-RAINBOWRIVER1118-ff61ecc9714747f5ba131e5ceac14af9.jpg",
    canzone: "Medicine",
    artista: "Gabriele Ricci",
    anno: 2017,
    descrizione: "",
    genere: "pop",
    playlist: "ita",
    prezzo: 0.99,
  });
  canzoni.push({
    url: "https://www.fuochiartificiali.it/wp-content/uploads/2019/10/15.jpg",
    canzone: "La mia strada",
    artista: "Sofia Giordano",
    anno: 2008,
    descrizione: "",
    genere: "napoli",
    playlist: "ita",
    prezzo: 0.99,
  });
  canzoni.push({
    url: "https://www.planetmountain.com/img/1/76911.jpg",
    canzone: "Felicità",
    artista: "Matteo Mancini",
    anno: 2020,
    descrizione: "",
    genere: "jazz",
    playlist: "ita",
    prezzo: 0.49,
  });
  localStorage.setItem("canzoni", JSON.stringify(canzoni));
}
// Carrello con canzoni
var carrello = JSON.parse(localStorage.getItem("carrello"));
if (carrello == null) {
  var carrello = [];
  localStorage.setItem("carrello", JSON.stringify(carrello));
}
// Quantità dei prodotti
var quantita = JSON.parse(localStorage.getItem("quantita"));
if (quantita == null) {
  var quantita = [];
  localStorage.setItem("quantita", JSON.stringify(quantita));
}
// Reportistica
var report = JSON.parse(localStorage.getItem("report"));
if (report == null) {
  var report = [];
  localStorage.setItem("report", JSON.stringify(report));
}
// Funzione per aggiungere elementi al carrello
function aggiungiAlCarrello(canzone) {
  if (
    carrello.some((cerca) => JSON.stringify(cerca) === JSON.stringify(canzone))
  ) {
    alert("La canzone è già presente nel carrello");
  } else {
    carrello.push(canzone);
    quantita.push(1);
    localStorage.setItem("carrello", JSON.stringify(carrello));
    localStorage.setItem("quantita", JSON.stringify(quantita));
    alert("Canzone aggiunta al carrello");
  }
}
