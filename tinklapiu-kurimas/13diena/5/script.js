const pirma = Math.round(+prompt("Sienos ilgis"));
console.log(pirma);
const antra = Math.round(+prompt("Sienos aukštis"));
console.log(antra);
const trecia = Math.round(+prompt("Plytos kaina"));
console.log(trecia);

const plytu = (pirma*antra)/(0.2*0.1);
const suma = plytu*trecia;
console.log("Plytu kiekis :",plytu.toFixed(0));
console.log("Plytos kainuos :",suma.toFixed(0),"Lt");