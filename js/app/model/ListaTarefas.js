class ListaTarefas {
    
    constructor() {
        this._tarefas = [];
    }
    
    adiciona(tarefa) {
        this._tarefas.push(tarefa);
    }
    
    get tarefas() {
        return this._tarefas;
    }
}