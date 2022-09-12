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

const testClosure = () => {
  const variable = 12;
  console.log(variable);
  // Test 2 est une closure car elle peut acceder au contenus de testClosure
  const test2 = () => {
    console.log(variable);
  };
};

for (let i = 0; i < 5; i++) {
  console.log("variable: " + i);
}

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i); // Il sera déjà à 10
  }, 1000);
}
// SOlution créer une fonction qui s'auto-appel et qui prend en argument la valeur de chaque itération
for (let i = 0; i < 10; i++) {
  (function () {
    setTimeout(() => {
      console.log(i); // Il sera déjà 0 à 10
    }, 1000);
  })();
}
