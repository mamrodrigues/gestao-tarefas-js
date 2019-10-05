
/**
 * ESTE ARQUIVO NÃO É MAIS UTILIZADO NO PROJETO
 * 
 * Mantido apenas como backup para dúvidas e testes de eventos do Ecmascript6
 */
var botaoAdicionar = document.querySelector("#criar-tarefa");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var tarefa = obtemTarefaDoFormulario(form);

    var tarefaTr = montaTr(tarefa);

    var tabela = document.querySelector("#table-tasks");

    tabela.appendChild(tarefaTr);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemTarefaDoFormulario(form) {

    var tarefa = {
        titulo: form.titulo.value,
        prioridade: form.prioridade.value,
        descricao: form.descricao.value,
        tempo: form.tempo.value,
    }

    return tarefa;
}

function montaTr(tarefa) {
    var tr = document.createElement("tr");
    carregarPrioridade(tarefa.prioridade, tr);

    tr.appendChild(montaTd(tarefa.titulo, "info-titulo"));
    tr.appendChild(montaTd(tarefa.descricao, "info-descricao"));
    tr.appendChild(montaTd(tarefa.tempo, "info-tempo"));

    return tr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function carregarPrioridade(prioridade, tr) {
    if (prioridade=="alta") {
        tr.classList.add("alta");
    } else if (prioridade=="media"){
        tr.classList.add("media");
    } else {
        tr.classList.add("baixa");
    }

    return tr;
}