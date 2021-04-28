var num;
process.stdout.write("Dime un numero: ");

process.stdout.on('data', function(data){
    num = parseInt(data)
    if (num % 2 == 0) {
        console.log(`El numero ${num} es par`)
    }else if(num % 2 != 0) {
        console.log(`El numero ${num} es impar`)
    } else {
        console.log(`Tu numero es 0`)
    }

    process.exit()
})