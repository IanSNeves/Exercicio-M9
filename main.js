$(document).ready(function(){
    $("form").submit(function(e) {
        e.preventDefault(); 
        console.log("Tarefa gravada com sucesso!")

        const taskName = $("#task").val();

        if (taskName !== "") {
            const taskItem = `<li class="task-item">
                        <p class="task-text">${taskName}</p>
                        <button id="del__button" class="delete-button btn">Excluir</button>
                    </li>`

            $("#task-list").append(taskItem);
            $("#task").val("");
        }
    });

    $("#task-list").on("click", ".task-text", function() {
        $(this).toggleClass("completed");
    });

    $('#task-list').on('click', '#del__button', function() {
        console.log("Tarefa removida!")
        $(this).closest('li').remove();
    });

    $('#del__button-container').on('click', '#del__all', function() {
        console.log("Lista esvaziada!")
        $('#task-list').empty();
    });

});