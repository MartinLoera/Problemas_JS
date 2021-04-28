var pares = 0;
var impares = 0;

for (let num = 0; num < 101; num++) {
    if (num % 2 == 0) {
        pares+= num
        console.log(num)
    }else if (num % 2 != 0) {
        impares+= num
        console.log(num)
    }
}
console.log(`La suma de todos los numeros pares es: ${pares}\nLa suma de todos los numeros impares es: ${impares}`)