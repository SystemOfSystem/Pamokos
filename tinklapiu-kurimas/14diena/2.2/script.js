const pirma = +prompt("Kiek sveria varlė?");
console.log(pirma);
const antra = +prompt("Kiek varlių norima stebėti?");
console.log(antra);

const suma = pirma * antra;
console.log(suma);

if (suma > 5000) {
  console.log("Varlių stebėjimui pakanka");
} else {
  console.log("Varlių stebėjimui per mažai");
}
