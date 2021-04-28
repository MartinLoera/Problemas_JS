const readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = function () {
    rl.question("Escribe:\n"
        + "S) Opcion s\n"
        + "N) Opcion n\n"
        + "3) Exit\n"
        , function (line) {

            switch (line){
                case "S":
                    console.log("this is option 1");
                    break;
                case "N":
                    console.log("this is option 2");
                    break;
                case "3":
                    return rl.close();
                    break;
                default:
                    console.log("No such option. Please enter another: ");
            }
    recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine(); 