let calcular = document.getElementById('calcular')
calcular.addEventListener('click',gerar)

function gerar() {
    let numeroBase = window.document.getElementById('txt-numero').value
    let res = document.getElementById('res')

    if (numeroBase.length>=15){
        alert('Por favor, mantenha a tabuada com menos de 15 digitos')
    }
    else if (numeroBase.length != 0){
        let n = Number(numeroBase)
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++){
        
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            res.appendChild(item)
    
        }
    } else{
         alert('Por favor, digite um número')

    }



}