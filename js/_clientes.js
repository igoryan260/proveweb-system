var novoCliente = document.querySelector("#novo");
var atualizarCliente = document.querySelector("#atualizar");
var excluirCliente = document.querySelector("#excluir");

var iframeNovoCliente = document.querySelector("#iframeNovoCliente");
var iframeAtualizarCliente = document.querySelector("#iframeAtualizarCliente");
var iframeExcluirCliente = document.querySelector("#iframeExcluirCliente");

novoCliente.addEventListener("click", function() {
    iframeNovoCliente.className = "iframe";
    iframeAtualizarCliente.className = "display";
    iframeExcluirCliente.className = "display";
});

atualizarCliente.addEventListener("click", function() {
    iframeNovoCliente.className = "display";
    iframeAtualizarCliente.className = "iframe";
    iframeExcluirCliente.className = "display";
});

excluirCliente.addEventListener("click", function() {
    iframeNovoCliente.className = "display";
    iframeAtualizarCliente.className = "display";
    iframeExcluirCliente.className = "iframe";
});