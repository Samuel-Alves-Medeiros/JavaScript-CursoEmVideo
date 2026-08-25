let data = new Date();
let hora = data.getHours();
let greeting;
let generateRecord = document.getElementById('generateRecord');
generateRecord.addEventListener('click', createRecord )

function createRecord() {
    let userName = document.getElementById('user-name').value;
    let userAge = document.getElementById('user-birth-date').value;
    let userPosition = document.getElementById('user-position').value;
    let userCountry = document.getElementById('user-country').value;
    let result = document.getElementById('resultId');

    let userBirthday = new Date(userAge);
    let today = data.getFullYear();
    let idade = today - userBirthday.getFullYear();

    if (hora >=0 && hora <=5) {
        greeting = 'Boa madrugada'
    } else if (hora >5 && hora <12) {
        greeting = 'Bom dia'
    } else if (hora >=12 && hora <18) {
        greeting = 'Boa tarde'
    } else if (hora >=18 && hora <=23) {
        greeting = 'Boa noite'
    }
    result.innerHTML = `${greeting}, ${userName}! <br> Idade:${idade}<br> ${userCountry}<br> ${userPosition}` 

}

