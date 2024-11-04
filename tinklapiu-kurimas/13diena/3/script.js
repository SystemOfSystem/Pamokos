const pirma = +prompt("Kiek yra monetų po 5 ct?");
console.log(pirma);
const antra = +prompt("Kiek yra monetų po 20ct?");
console.log(antra);
const trecia = +prompt("Kiek yra monetų po 2 Lt");
console.log(trecia);

const Suma = pirma*0.05+antra*0.2+trecia*2;
console.log("Taupyklėje yra", Suma,"Lt");