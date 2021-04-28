const prompt=require('prompt-sync')();

let num = 0;
function inicio() {
    num = Number(prompt("Que numero desea sacar el factorial?: "))
    console.log(`El factorial de ${num} es ${factorial(num)}`)
}

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

inicio()