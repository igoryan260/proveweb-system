var novo = document.querySelector("#novo");
var iframeNovoBanho = document.querySelector("#iframeNovoBanho");

var excluir = document.querySelector("#excluir");
var iframeExcluirBanho = document.querySelector("#iframeExcluirBanho");

var agenda = document.querySelector("#agenda");
var iframeAgenda = document.querySelector("#iframeAgenda");

novo.addEventListener("click", function() {
    iframeNovoBanho.className = "iframe";
    iframeAgenda.className = "display";
    iframeExcluirBanho.className = "display";
});

excluir.addEventListener("click", function() {
    iframeNovoBanho.className = "display";
    iframeExcluirBanho.className = "iframe";
    iframeAgenda.className = "display";
});

agenda.addEventListener("click", function() {
    iframeAgenda.className = "iframe";
    iframeExcluirBanho.className = "display";
    iframeNovoBanho.className = "display";
})