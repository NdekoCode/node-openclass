let monkey = "KingKong"; // A un scope grobale
function setVariable() {
  monkey = "Gorilla"; // Il est global donc il est accessible mm dans une fonction
}
console.log(monkey); // monkey
setVariable();
console.log(monkey); // Gorilla
function viewVariable() {
  let myVar = "Hello world"; // Est locale à la fonction càd il ne sera accessible que dans cette fonction
  console.log("My variable: " + myVar);
}
viewVariable();
// console.log(myVar); // Va afficher une erreur car la variable est locale à la fonction
