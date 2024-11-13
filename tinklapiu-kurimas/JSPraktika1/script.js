let pirma = +prompt("Skaičius");
console.log(pirma);
let x = 0;
let y = 0;
if (pirma % 2 == 0) {
  for (let i = 0; i < pirma/2; i++) {
    x = x + 2;
    console.log(x);
    y = y + x;
  }
} else {
  console.log("nelygus")
}
y = y - x;
console.log("Suma:",y);