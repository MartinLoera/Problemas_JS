const prompt=require('prompt-sync')();

let frase = prompt("Cual es tu frase:").toString()
let letra = prompt("Cual letra quieres buscar: ").toString()
var indices = [];


for(var i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === letra) indices.push(i);
}

console.log(`La letra ${letra} aparece ${indices.length} en la frase "${frase}"`)