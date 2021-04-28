const prompt=require('prompt-sync')();
let a = true
let suma = 0
var multiplos = []
let nums = [NaN,NaN]
while (a) {
    nums[0] = parseInt(prompt("Primer numero:"))
    nums[1] = parseInt(prompt("Segundo numero:"))
    if (nums[1] >= nums[0]) {
        for(let i = nums[0]; i <= nums[1]; i++){
            if (i % 2 == 0) {
                multiplos.push(i)
                suma+=i
            }
        }
        a = false
    } else {
        console.log("EL segundo numero debe ser mayor o igual al primero")
    }
}

console.log(`El intervalo es ${nums[0]}-${nums[1]}`)
console.log(`Los numeros multiplos de 2 en el intervalo son ${multiplos}`)
console.log(`Existen ${multiplos.length} numeros multiplos en el intervalo`)
console.log(`La suma de los numeros multiplos es ${suma}`)