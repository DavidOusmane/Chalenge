
let amigos = [];

let lista = document.getElementById('listaAmigos');

function adicionarAmigo() {
    let nome = document.querySelector('input');
    if (nome.value == '') {
        alert ('Por favor insira um nome.'); 
    } else {
        amigos.push(nome.value);
        nome.value = '';
    }
    AtualizarLista();
}
    
function AtualizarLista() {
    lista.value = '';
    lista.innerHTML = amigos;
}

function sortearAmigo() {
    if (amigos.length > 1) {
        Sorteio();
    } else if (amigos.length == 1) {
        Sorteio();
        setTimeout(() => {AtualizarLista()}, 5000);
    } else {
        alert ('Não há nomes a serem sorteados.')
        AtualizarLista();
    }
}

function Sorteio() {
    let sorteio;
    let nomesorteado;
    sorteio = parseInt(Math.random()*amigos.length);
    nomesorteado = amigos[sorteio];
    amigos.splice(sorteio,1);
    // Não alterei o campo da página após haver o sorteio para ngm descobrir os sorteados através de eliminação.
    let fraseSorteio = document.getElementById('resultado'); 
    fraseSorteio.innerHTML = `${nomesorteado} é seu amigo oculto!`;
    // Achei necessário temporizar a função, pois deve haver tempo para pessoa ver seu amigo oculto, porém não a próxima não deve ver.   
    setTimeout(() => { ZerarTexto(); }, 5000);
}

function ZerarTexto() {
    let fraseSorteio = document.getElementById('resultado'); 
    fraseSorteio.innerHTML = '';
}

