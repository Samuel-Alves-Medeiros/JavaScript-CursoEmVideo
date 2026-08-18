function carregar(){
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos `
    if (hora >= 0 && hora < 12 ) {
        //BOM DIA!
        img.src = 'arquivomanha.png'
        document.body.style.background = '#f0daab'
    } else if (hora >=12 && hora < 18){
        //BOA TARDE!
        img.src = 'arquivotarde.png'
        document.body.style.background = '#F29156'
    } else {
        //BOA NOITE!
        img.src = 'arquivonoite.png'
        document.body.style.background = '#1F2D37'
    }
}
