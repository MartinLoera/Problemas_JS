const prompt=require('prompt-sync')();
var numeros = [];
var mayor = -1000
var menor = 1000
for(let i=0; i<5; i++){
	numeros.push(parseInt(prompt("Ingrese numero: ")));
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i]
    }
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i]
    }
}

console.log(`El numero mayor es ${mayor}\nEl numero menor es ${menor}`)