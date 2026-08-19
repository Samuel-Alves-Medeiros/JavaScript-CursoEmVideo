let buton = window.document.getElementById ('bt');
buton.addEventListener ('click', clicar);
let sub = window.document.getElementById('sub');
sub.addEventListener ('click', escSub);
let adi = window.document.getElementById('adi');
adi.addEventListener('click',escAdi);
let multi = window.document.getElementById ('mult');
multi.addEventListener('click', escMulti);
let divi = window.document.getElementById('divi');
divi.addEventListener('click', escDivi)
let operacaoEscolhida;
    function escAdi () {
        operacaoEscolhida = '+'
    }
    function escSub () {
        operacaoEscolhida = '-'
    }
    function escMulti (){
        operacaoEscolhida = '*'
    }
    function escDivi () {
        operacaoEscolhida = '/'
    }
    function clicar () {
        let txn1 = window.document.getElementById ('txtn1');
        let txn2 = window.document.getElementById ('txtn2');
        let n1 = Number(txn1.value );
        let n2 = Number(txn2.value );
        let s;
        let nomeOperacao;
        if (operacaoEscolhida === '+') {
            s = n1 + n2
            nomeOperacao = 'soma'
        } else if (operacaoEscolhida === '-') {
            s = n1 - n2
            nomeOperacao = 'subtração'
        } else if (operacaoEscolhida === '*'){
            s = n1 * n2
            nomeOperacao = 'multiplicação'
        } else if (operacaoEscolhida === '/'){
            s = n1/n2
            nomeOperacao = 'divisão'
        }
        let result = window.document.getElementById ('res');
        result.innerHTML = `o resultado da ${nomeOperacao} entre ${n1} e ${n2} é igual a ${s} `

}