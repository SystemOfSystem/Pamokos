const pirma = +prompt("Kiek žuvų gyvena akvariume ?");
console.log(pirma);
const antra = +prompt("Kiek žuvų į akvariumą įdedama kiekvieną dieną ?");
console.log(antra);
const trecia = +prompt("Kiek dienų praėjo ?");
console.log(trecia);

const Suma = antra*trecia+pirma;
console.log("Po",trecia,"dienų akvariume gyvens",Suma,"žuvų");