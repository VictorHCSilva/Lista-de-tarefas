const criarTarefa = ((evento) => {
    evento.preventDefault()
    // acessando o input e a lista 
    const input = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-list]')
    // pegando o valor do input
    const valor = input.value
    //criando o elemento li
    const tarefa = document.createElement('li')
    //criando template string para li
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(botao())

    lista.appendChild(tarefa)
    //limpando o input
    input.value = ""
})

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', (criarTarefa))

const botao = () => {
    //criar botao
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerHTML = 'concluir'

    //criar o evento de click
    botaoConclui.addEventListener('click',concluirTarefa)
    return botaoConclui
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement
    tarefaCompleta.classList.toggle('done')
}

