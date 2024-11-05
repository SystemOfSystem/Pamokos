let pirma = +prompt("Įveskite, kiek snaigių nukrito per pirmąja sekundę ir kiek sekundžių snigo:");
console.log(pirma++);

let suplojimu = 0;
let spragtelejimu = 0;

for (let i = 0; i < pirma; i++) {
  if (i % 5 == 0 & i % 10 != 0 & i != 0) {
    spragtelejimu++;
  }
  if (i % 10 == 0 & i != 0) {
    suplojimu++;
  }
}
console.log("Suplojimų bus:",suplojimu);
console.log("Spragtelėjimų bus:",spragtelejimu);
