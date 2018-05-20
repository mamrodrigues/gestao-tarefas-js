var pacientes = document.querySelectorAll(".tarefa");

var tabela = document.querySelector("#table-tasks");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
