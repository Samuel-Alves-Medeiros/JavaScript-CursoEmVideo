

let calcular = document.getElementById('calcular')
calcular.addEventListener('click', comecar)

function comecar() {
    let resultado = document.getElementById('res')
    let inicio = document.getElementById('txt-inicio').value
    let fim = document.getElementById('txt-fim').value
    let passo = document.getElementById('txt-passo').value

    

    

    if (inicio.length  == 0 || fim.length == 0 || passo.length == 0) {
        alert('[ERRO] Todos os dados precisam ser preenchidos.')
    }
    else if (passo == 0) {
        alert('O passo precisar ser diferente de zero')
        alert('ignorando passo zero... considerando passo 1')
        passo = 1
    }
    else{
        resultado.innerHTML = `Contando:`
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        if (i < f){
            for (let c = i; c <= f; c += p ){
                resultado.innerHTML += `\u{1F449}${c} `
            }
            resultado.innerHTML += `\u{1F3C1}`
        } else {
            for(let c = i; c >= f; c -= p ) {
                resultado.innerHTML +=  `\u{1F449}${c} `
            }
        }
        `\u{1F449}${c} `
    }
        
}
