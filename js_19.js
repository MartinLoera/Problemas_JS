const time = new Date();
const prompt=require('prompt-sync')();

let hora = time.getHours()
let minutos = time.getMinutes()
let segundos = time.getSeconds()

function fixTime(hr) {
    console.log(typeof(hr))
    let time = Number(hr)
    if (hr < 10) {
        hr = `0${hr}`
    }
}
console.log(hora)

fixTime(minutos)
fixTime(segundos)


console.log(`Son las: ${hora}:${minutos}:${segundos}`)