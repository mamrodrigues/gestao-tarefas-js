
class TarefaController{

    constructor(){
        this._id = 1;

        this._listaTarefas = new ListaTarefas();
        let ref = document.querySelector.bind(document);

        this.tarefasView = new TarefasView(ref('#tarefasView'));
        this.tarefasView.atualiza(this._listaTarefas);

        this._inputTitulo = ref("#titulo");
        this._inputPrioridade = ref("#prioridade");
        this._inputDescricao = ref("#descricao");
        this._inputTempo = ref("#tempo");
        this._inputPrazo = ref("#prazo");
    }

    adiciona(event){
        event.preventDefault();

        let tarefa = new Tarefa(
            this._id++,
            this._inputTitulo.value,
            this._inputPrioridade.value,
            this._inputDescricao.value,
            this._inputTempo.value,
            new Date(this._inputPrazo.value.split('-'))
        );

        this.listaTarefas.adiciona(tarefa);
        this.tarefasView.atualiza(this._listaTarefas);

        this._limpaFormulario();
    }

    editar(id){

        this._listaTarefas.tarefas.map((tarefa) => {
            if(tarefa.id == id){
                this._inputTitulo.value = tarefa.titulo;
                this._inputPrioridade.value = tarefa.prioridade;
                this._inputDescricao.value = tarefa.descricao;
                this._inputTempo.value = tarefa.tempo;
            }
        })
        this.tarefasView.atualiza(this._listaTarefas);
    }

    excluir(id){
        let lista = this._listaTarefas.tarefas;

        lista.map((tarefa) => {
            if(tarefa.id == id){
                lista.splice(lista.indexOf(tarefa), 1);
            }
        })
        this.tarefasView.atualiza(this._listaTarefas);
    }

    get listaTarefas(){
        return this._listaTarefas;
    }

    _limpaFormulario() {
        this._inputTitulo.value = '';
        this._inputDescricao.value = ''
        this._inputTempo.value = 0
        this._inputPrazo.value = new Date();

        this._inputTitulo.focus();
    }
}