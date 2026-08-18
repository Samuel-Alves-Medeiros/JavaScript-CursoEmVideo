let data = new Date();
let hora = data.getHours();
let greeting;
let generateRecord = document.getElementById('generateRecord');
generateRecord.addEventListener('click', createRecord);

function createRecord() {
    let userName = document.getElementById('userNameTxt').value;
    let userAge = Number(document.getElementById('userAgeTxt').value);
    let userPosition = document.getElementById('userPositionTxt').value;
    let userCountry = document.getElementById('userCountryTxt').value;
    let result = document.getElementById('resultId');
    if (hora >=0 && hora <=5) {
        greeting = 'Boa madrugada'
    } else if (hora >5 && hora <12) {
        greeting = 'Bom dia'
    } else if (hora >=12 && hora <18) {
        greeting = 'Boa tarde'
    } else if (hora >=18 && hora <=23) {
        greeting = 'Boa noite'
    }
    result.innerHTML = `${greeting}Idade:${userAge}<br> ${userCountry}<br>` 

}

