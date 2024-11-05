const pirma = +prompt("Koks automobilio greitis km/h ?");
console.log(pirma);

const suma = 264/(pirma*1000/3600);
console.log("Automobilis tunelį parvažious per",suma.toFixed(2),"s");