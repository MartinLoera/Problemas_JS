var num;
let multiplos = [];
var acum = 0;

process.stdout.write("Dime un numero: ");

process.stdout.on('data', function(data){
    num = parseInt(data)
    for (let index = 1; index < num; index++) {
        let element = index;
        if (element % 3 == 0) {
            multiplos.push(element)
            acum++
        }
    }
    console.log(`Los multiplos de 3 de 1 hasta ${num} son\n ${multiplos}\n`)
    console.log(`Existen ${multiplos.length} multiplos de 3`)

    process.exit()
})