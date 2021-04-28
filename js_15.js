const prompt=require('prompt-sync')();
var numeros = []
for(let i = 0; i < 2; i++){
    numeros.push(parseInt(prompt("Ingresa un numero: ")))
}

numeros.sort(function(a, b) {
    return a - b;
  });

while (numeros[0] <= numeros[1]) {
    console.log(numeros[0])
    numeros[0] += 1
}