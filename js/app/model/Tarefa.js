
class Tarefa {

    constructor(id, titulo, prioridade, descricao, tempoEstimado, prazo){
        this._id = id;
        this._titulo = titulo;
        this._prioridade = prioridade;
        this._descricao = descricao;
        this._tempoEstimado = tempoEstimado;
        this._prazo = prazo;
        Object.freeze(this);
    }

    get id(){
        return this._id;
    }

    get titulo(){
        return this._titulo;
    }

    get prioridade(){
        return this._prioridade;
    }

    get descricao(){
        return this._descricao;
    }

    get tempoEstimado(){
        return this._tempoEstimado;
    }

    get prazo(){
        return this._prazo;
    }

}