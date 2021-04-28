let frases = []
var input;
const readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = function () {
    rl.question("Escribe tu frase: "
        , function (line) {
            input = line.toString();
            
            if (line.length > 0) {
                frases.push(input)    
            }else {
                console.log(frases)
                rl.close()
            }
    recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine(); 