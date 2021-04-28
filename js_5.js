let num = 0
let acum = 0
while (num <= 100) {
    if (num % 2 != 0) {
        console.log(num)
        acum++
    }
    num++
}
console.log(`Existen ${acum} numeros impares entre 0 y 100`)
