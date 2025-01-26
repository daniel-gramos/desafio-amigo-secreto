//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigosSecretos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo == ''){
        alert('É preciso adicionar um nome na lista para realizar o sorteio!');
    }
    if (listaDeAmigosSecretos.includes(nomeAmigo)){
        alert("Você já digitou esse nome! Confira e digita novamente");
        limparNome();
    } else {
        listaDeAmigosSecretos.push(nomeAmigo);
        let lista = document.getElementById('listaAmigos');
        let novoAmigo = document.createElement('li');

        for (let i = 0; i < listaDeAmigosSecretos.length; i++) {
            novoAmigo.innerHTML = listaDeAmigosSecretos[i];
            lista.appendChild(novoAmigo);
            //exibirAmigosNaTela('listaAmigos', `${listaDeAmigosSecretos}`);
        }
        limparNome();
    }

}

function exibirTextoNaTela(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function exibirAmigosNaTela(){
    exibirTextoNaTela('listaAmigos', `${listaDeAmigosSecretos}`);
}

function limparNome(){
    nomeAmigo = document.getElementById('amigo');
    nomeAmigo.value = '';
}


function sortearAmigo() {
    if (listaDeAmigosSecretos.length === 0) {
        exibirTextoNaTela('resultado', `Todos os nomes já foram sorteados.`);
        return;
    } else {
        let escondeLista = document.getElementById('listaAmigos').setAttribute('hidden', 'true')
        let listaNova = listaDeAmigosSecretos;
        // Gera um índice aleatório baseado no comprimento do array
        let indiceSorteado = Math.floor(Math.random() * listaNova.length);
    
        // Remove o nome sorteado do array e armazena
        let nomeSorteado = listaNova.splice(indiceSorteado, 1)[0];
    
        // Exibe o nome sorteado
        exibirTextoNaTela('resultado', `O amigo secreto sorteado é: ${nomeSorteado}`);
    }
    // Atualiza a lista exibida na tela (opcional)
    //atualizarListaVisivel();
}