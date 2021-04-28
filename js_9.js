var num;
let turno = 1
process.stdout.write("Dime un numero: ");

process.stdout.on('data', function(data){
    num = parseInt(data)
    if (num > 0) {
        console.log(`El numero ${num} es positivo`)
    }else if(num < 0) {
        console.log(`El numero ${num} es negativo`)
    } else {
        console.log(`Tu numero es 0`)
    }

    process.exit()
})