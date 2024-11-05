const pirma = +prompt("Kokius pažymus gavo Petriukas?");
console.log(pirma);
const antra = +prompt("Kokius pažymus gavo Petriukas?");
console.log(antra);
const trecia = +prompt("Kokius pažymus gavo Petriukas?");
console.log(trecia);
const ketvirta = +prompt("Kokius pažymus gavo Petriukas?");
console.log(ketvirta);
const penkta = +prompt("Kokius pažymus gavo Petriukas?");
console.log(penkta);

const suma = (pirma + antra + trecia + ketvirta + penkta) / 5;
console.log(suma);

if (suma > 9) {
  console.log("Petriukas gaus tris saldainius");
} else if ((suma >= 7) & (suma <= 9)) {
  console.log("Petriukas gaus du saldainius");
} else {
  console.log("Petriukas gaus vieną saldainį");
}
