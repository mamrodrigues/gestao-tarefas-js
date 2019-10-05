class TarefasView extends View {

    constructor(elemento) {
        super(elemento);
    }
    
    _template(model) {
        return `
            <table>
                <head>
                    <tr>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Tempo Estimado</th>
                        <th>Prazo</th>
                        <th></th>
                    </tr>
                </head>
                <tbody id="table-tasks">
                    ${
                        model.tarefas.map((tarefa) => {
                            return `
                                <tr ${this.montaClassList(tarefa.prioridade)}>
                                  <td>${tarefa.titulo}</td>
                                  <td>${tarefa.descricao}</td>
                                  <td>${tarefa.tempoEstimado}</td>
                                  <td>${DateHelper.dataParaTexto(tarefa.prazo)}</td>
                                  <td>
                                    <img src="edit.png" onclick="tarefaController.editar('${tarefa.id}')">
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src="delete.png" onclick="tarefaController.excluir('${tarefa.id}')"></td>
                                </tr>
                            
                            `
                        }).join('')
                    }
                </tbody>
            </table>`;
    }

    atualiza(model) {
        this._elemento.innerHTML = this._template(model);
    }

    montaClassList(prioridade, tr) {
        let value = "class=";
        if (prioridade=="alta") {
            return value+"'alta'";
        } else if (prioridade=="media"){
            return value+"'media'";
        } else {
            return value+"'baixa'";
        }
    
        return value;
    }

}