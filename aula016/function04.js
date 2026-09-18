//<----------Caulcular fatorial----------->

let numFat = 120
let res = 1

function fatorial (n) {
    for (let i = 1; i<=numFat; i++){
        res*=i 
    }
    return res
}

console.log(fatorial(numFat))