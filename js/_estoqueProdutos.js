var abrirFormulario = document.querySelector("#inputTextBox");
var containerFormBusca = document.querySelector("#container-formBusca");
var fecharFormulario = document.querySelector("#fecharFormulario");

abrirFormulario.addEventListener("click", function() {
    containerFormBusca.className = "";
});

fecharFormulario.addEventListener("click", function() {
    containerFormBusca.className = "display-none";
})