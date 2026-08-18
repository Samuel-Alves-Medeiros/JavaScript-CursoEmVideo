let agora = new Date ();
let hora = agora.getHours();
let minutos = agora.getMinutes ();
if (hora >=12 && hora <=5) {
    console.log (`Agora são exatamente ${hora} horas e ${minutos} minutos. Boa madrugada! :)`);
} else if (hora < 12) {
    console.log (`Agora são exatamente ${hora} horas e ${minutos} minutos. Bom dia! :D`)
} else if (hora  <18) {
    console.log (`Agora são exatamente ${hora} horas e ${minutos} minutos. Boa tarde! :)`)
} else {
    console.log (`Agora são exatamente ${hora} horas e ${minutos} minutos. Boa noite! :)`)
}  