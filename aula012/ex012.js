var idade = 64
console.log (`Você tem ${idade} anos`)
if (idade < 16) {
    console.log ('não vota')
} else if (idade >=16 && idade < 18 || idade >=65) { // também pode ser só if (idade <18)
    console.log('Voto opicional')
} else {
    console.log ('voto obrigatório')
}