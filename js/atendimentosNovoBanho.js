var semCadastro = document.querySelector("#tituloSemCadastro");
var comCadastro = document.querySelector("#tituloComCadastro");

var agendamentoSemCadastro = document.querySelector("#agendamentoSemCadastro");
var agendamentoComCadastro = document.querySelector("#agendamentoComCadastro");

comCadastro.addEventListener("click", function() {
    agendamentoSemCadastro.className = "display";
    agendamentoComCadastro.className = "agendamento agdComCadastro";

    semCadastro.className = "";
    comCadastro.className = "abaSelecionada";
});

semCadastro.addEventListener("click", function() {
    agendamentoSemCadastro.className = "agendamento agdSemCadastro";
    agendamentoComCadastro.className = "display";

    semCadastro.className = "abaSelecionada";
    comCadastro.className = "";
})