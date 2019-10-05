
class TarefaController{

    constructor(){
        this._id = 1;

        let ref = document.querySelector.bind(document);

        let self = this;

        /**
         * Utilizando padrão Proxy
         */
        // this._listaTarefas = new Proxy(new ListaTarefas(), {

        //     get(target, prop, receiver) {

        //         if(['adicionar','excluir'].includes(prop) 
        //             && typeof(target[prop]) == typeof(Function)) {

        //             return function(){

        //                 /** 
        //                  * Toda função tem implicitamente o atributo arguments
        //                  * Ele é um array com todos os argumentos que foram passados
        //                  * no momento de chamda da funcao
        //                 */
        //                 Reflect.apply(target[prop], target, arguments);
        //                 self._tarefasView.atualiza(target);
        //             }
        //         }
        //         return Reflect.get(target, prop, receiver);
        //     }
        // });

        /**
         * Removendo funcao Trap para utilizacao do padrão Proxy
         * 
         * Funcao sendo passada por referencia para o construtor do
         * ListaTarefas, essa funcao neste caso
         * é chamada quando as operacoes de exclusao e adicao sao acionadas
         */
        // this._listaTarefas = new ListaTarefas(model => {
        //     this._tarefasView.atualiza(model);
        // });


        /**
         * Utilizando padrão Proxy e Factory
         */
        this._listaTarefas = ProxyFactory.create(new ListaTarefas(), 
            (model) => {
                this._tarefasView.atualiza(model);
            }, 'adicionar','excluir'
        );
        this._tarefasView = new TarefasView(ref('#tarefasView'));
        //this._tarefasView.atualiza(this._listaTarefas);

        this._inputTitulo = ref("#titulo");
        this._inputPrioridade = ref("#prioridade");
        this._inputDescricao = ref("#descricao");
        this._inputTempo = ref("#tempo");
        this._inputPrazo = ref("#prazo");

        /**
         * Utilizando padrão Proxy e Factory
         */
        this._mensagem = ProxyFactory.create(new Mensagem(), 
            (model) => {
                this._mensagemView.atualiza(model);
            }, 'texto'
        );

        //this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(ref('#mensagemView'));
        //this._mensagemView.atualiza(this._mensagem);
    }

    adiciona(event){
        event.preventDefault();

        let tarefa = new Tarefa(
            this._id++,
            this._inputTitulo.value,
            this._inputPrioridade.value,
            this._inputDescricao.value,
            this._inputTempo.value,
            DateHelper.textoParaData(this._inputPrazo.value)
        );

        this._listaTarefas.adicionar(tarefa);
        //this._tarefasView.atualiza(this._listaTarefas);
        
        this._mensagem.texto = 'Tarefa adicionada com sucesso';
        //this._mensagemView.atualiza(this._mensagem)

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
        //this._tarefasView.atualiza(this._listaTarefas);
    }

    excluir(id){
        this._listaTarefas.excluir(id);
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