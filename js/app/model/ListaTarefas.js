class ListaTarefas {

    /**
     * 
     * Removendo o paremetro funcaoTrap
     * para utilização do padrão Proxy
     */
    //constructor(funcaoTrap) {
    constructor() {
        this._tarefas = [];

        /** 
         * A funcaoTrap é um conceito de Armadilha(Trap), que permite receber
         * uma funcao como parametro para que seja usada como um callback
         * 
         * Seu ponto negativo é que ela fica acoplada ao modelo, neste caso
         * ao ListaTarefas.
         * 
         * Alem disso, como neste caso ela atualiza a lista apos a adiciona ou exclui,
         * caso houvesse muitos métodos, em todos eles ela deveria ser chamada repetidamente
         * 
         * Sendo assim, como uma boa pratica para esta solucao, utiliza-se
         * o padrao Proxy disponivel no Ecmascript 6
         * 
         * Este so sera declarado na propria controller, no caso TarefaController
         */
        //this._funcaoTrap = funcaoTrap;
    }
    
    adicionar(tarefa) {
        this._tarefas.push(tarefa);
        /** 
         * Exemplo de utilizacao da funcao trap como callback de uma operacao
         * recebida por referencia atraves do construtor
         * 
         * Esta também pode ser recebida atraves do proprio metodo
         */
        //this._funcaoTrap(this);
    }

    excluir(id){
        this._tarefas.map((tarefa) => {
            if(tarefa.id == id){
                this._tarefas.splice(this._tarefas.indexOf(tarefa), 1);
            }
        })

        //this._funcaoTrap(this);
    }
    
    get tarefas() {
        return this._tarefas;
    }
}