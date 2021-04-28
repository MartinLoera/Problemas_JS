var num;
let turno = 1
process.stdout.write("Dime un numero: ");

process.stdout.on('data', function(data){
    num = parseInt(data)
    while (turno < num) {
        console.log(turno)
        turno++
    }

    process.exit()
})
