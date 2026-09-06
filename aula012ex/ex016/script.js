let botão = window.document.getElementById('verificar')
botão.addEventListener('click', verificar)

function verificar(){
    let resultado = window.document.querySelector('div#res')

    let data = new Date()
    let ano = data.getFullYear() // O valor já vem como number
    let fAno = window.document.getElementById('txt-ano').value 
    
    if (fAno == 0 || fAno > ano){
        alert('[ERRO] Verifique os dados e tente novamente.')
    }
    else{
        let fSex = window.document.getElementsByName('radsex')
        let idade = ano - Number(fAno)
        let genero = ''

        let img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSex[0].checked){
            genero = 'Masculino'
            
            if (idade >=0 && idade < 12){
                // Criança
                img.setAttribute('src', 'male-baby.png')
            }
            else if (idade < 18){
                // Adolescente
                img.setAttribute('src', 'male-teenager.png')
            }
            else if (idade < 60){
                // Aldulto
                img.setAttribute('src', 'male-adult.png')
            }
            else{
                // Idoso
                img.setAttribute('src', 'male-elder.png')
            }
        } 
        else if (fSex[1].checked) {
            genero = 'Feminino'

            if (idade >=0 && idade < 12){
                // Criança
                img.setAttribute('src', 'female-baby.png')
            }
            else if (idade < 18){
                // Adolescente
                img.setAttribute('src', 'female-teenager.png')
            }
            else if (idade < 60){
                // Aldulto
                img.setAttribute('src', 'female-adult.png')
            }
            else{
                // Idoso
                img.setAttribute('src', 'female-elder.png')
            }
        }
        resultado.innerHTML = `Seu genero é ${genero} e sua idade é ${idade}`
        resultado.appendChild(img)
    }
}
