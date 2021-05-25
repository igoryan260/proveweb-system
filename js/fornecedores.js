//buttons variaveis
var btn_verFornecedor = document.querySelector("#verFornecedores");
var btn_novoFornecedor = document.querySelector("#novo");
var btn_comprar = document.querySelector("#comprar");

//iframes variaveis
var iframe_novoFornecedor = document.querySelector("#iframeNovoFornecedor");
var iframe_verFornecedores = document.querySelector("#iframeVerFornecedores");
var iframe_comprarDoFornecedor = document.querySelector("#iframeCompraDoFornecedor");

//adicionando classe para o iframe ficarr 100% x 100%



//funcoes para colocar display none quando clica em algum btn

btn_verFornecedor.addEventListener("click", function() {
    iframe_verFornecedores.className = "iframe";
    iframe_novoFornecedor.className = "display";
    iframe_comprarDoFornecedor.className = "display";
});

btn_novoFornecedor.addEventListener("click", function() {
    iframe_verFornecedores.className = "display";
    iframe_novoFornecedor.className = "iframe";
    iframe_comprarDoFornecedor.className = "display";
});

btn_comprar.addEventListener("click", function() {
    iframe_verFornecedores.className = "display";
    iframe_novoFornecedor.className = "display";
    iframe_comprarDoFornecedor.className = "iframe";
})