let mul2 = 0
let mul3 = 0

for (let num = 0; num < 101; num++) {
    if (num % 2 == 0) {
        mul2+=num
        console.log(`El num ${num} es mult 2`)
    } else if (num % 3 == 0) {
        mul3+=num
        console.log(`El num ${num} es mult 3`)
    }
}

console.log(`La suma de los multiplos de 2 es ${mul2}`)
console.log(`La suma de los multiplos de 3 es ${mul3}`)