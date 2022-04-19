const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);


function criarTarefa  (evento) {

    evento.preventDefault()

    const input = document.querySelector('[data-form-input]');
    const lista = document.querySelector('[data-list]');
    const valor = input.value;

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class = "content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(botaoCumprirTarefa())
    tarefa.appendChild(botaoDeletarTarefa())
    lista.appendChild(tarefa);

    input.value = " ";

}


function botaoCumprirTarefa () {
    const botaoConclui = document.createElement('button');
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir';
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui;

}

function concluirTarefa (evento) {
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done')
}

function botaoDeletarTarefa (){
    const botaoDeleta = document.createElement('button')

    botaoDeleta.classList.add('delete-button')
    botaoDeleta.innerText = 'Deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta;
}

function deletarTarefa (evento){
    
    const deletarTarefa = evento.target;

    const tarefaCompleta = deletarTarefa.parentElement;
    tarefaCompleta.remove();
    
}