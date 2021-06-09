var novoProduto = document.querySelector("#novo");
var atualizarProduto = document.querySelector("#atualizar");
var vendaProduto = document.querySelector("#venda");
var estoqueProduto = document.querySelector("#estoque");
var promocoesProduto = document.querySelector("#promocoes");
var notificacoesProduto = document.querySelector("#notificacoes");
var excluirProduto = document.querySelector("#excluir");

var iframeNovoProduto = document.querySelector("#iframeNovoProduto");
var iframeAtualizarProduto = document.querySelector("#iframeAtualizarProduto");
var iframeVendaProduto = document.querySelector("#iframeVendaProduto");
var iframeEstoqueProduto = document.querySelector("#iframeEstoqueProduto");
var iframePromocoesProduto = document.querySelector("#iframePromocoesProduto");
var iframeNotificacoes = document.querySelector("#iframeNotificacoes");
var iframeExcluirProduto = document.querySelector("#iframeExcluirProduto");

novoProduto.addEventListener("click", function() {
    iframeNovoProduto.className = "iframe";
    iframeAtualizarProduto.className = "display";
    iframeVendaProduto.className = "display";
    iframeEstoqueProduto.className = "display";
    iframePromocoesProduto.className = "display";
    iframeNotificacoes.className = "display";
    iframeExcluirProduto.className = "display";
});

atualizarProduto.addEventListener("click", function() {
    iframeNovoProduto.className = "display";
    iframeAtualizarProduto.className = "iframe";
    iframeVendaProduto.className = "display";
    iframeEstoqueProduto.className = "display";
    iframePromocoesProduto.className = "display";
    iframeNotificacoes.className = "display";
    iframeExcluirProduto.className = "display";
});

vendaProduto.addEventListener("click", function() {
    iframeNovoProduto.className = "display";
    iframeAtualizarProduto.className = "display";
    iframeVendaProduto.className = "iframe";
    iframeEstoqueProduto.className = "display";
    iframePromocoesProduto.className = "display";
    iframeNotificacoes.className = "display";
    iframeExcluirProduto.className = "display";
});

estoqueProduto.addEventListener("click", function() {
    iframeNovoProduto.className = "display";
    iframeAtualizarProduto.className = "display";
    iframeVendaProduto.className = "display";
    iframeEstoqueProduto.className = "iframe";
    iframePromocoesProduto.className = "display";
    iframeNotificacoes.className = "display";
    iframeExcluirProduto.className = "display";
});

promocoesProduto.addEventListener("click", function() {
    iframeNovoProduto.className = "display";
    iframeAtualizarProduto.className = "display";
    iframeVendaProduto.className = "display";
    iframeEstoqueProduto.className = "display";
    iframePromocoesProduto.className = "iframe";
    iframeNotificacoes.className = "display";
    iframeExcluirProduto.className = "display";
});

notificacoesProduto.addEventListener("click", function() {
    iframeNovoProduto.className = "display";
    iframeAtualizarProduto.className = "display";
    iframeVendaProduto.className = "display";
    iframeEstoqueProduto.className = "display";
    iframePromocoesProduto.className = "display";
    iframeNotificacoes.className = "iframe";
    iframeExcluirProduto.className = "display";
});

excluirProduto.addEventListener("click", function() {
    iframeNovoProduto.className = "display";
    iframeAtualizarProduto.className = "display";
    iframeVendaProduto.className = "display";
    iframeEstoqueProduto.className = "display";
    iframePromocoesProduto.className = "display";
    iframeNotificacoes.className = "display";
    iframeExcluirProduto.className = "iframe";
})