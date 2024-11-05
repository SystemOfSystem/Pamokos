const pirma = +prompt("Trapecijos ilgesniojo pagrindo ilgis:");
console.log(pirma);
const antra = +prompt("Trapecijos trumpesniojo pagrindo ilgis:");
console.log(antra);
const trecia = +prompt("Trapecijos aukštinės ilgis:");
console.log(trecia);

const suma = (pirma+antra)/2*trecia;
console.log("Trapecijos plotas:",suma.toFixed(2));