var boletosRelatorios = document.querySelector("#boletosRelatorios");
var nfe = document.querySelector("#nfe");

var iframeBoletos = document.querySelector("#iframeBoletosRelatorios");
var iframeNfe = document.querySelector("#iframeNfe");

boletosRelatorios.addEventListener("click", function() {
    iframeBoletos.className = "iframe";
    iframeNfe.className = "display";
});

nfe.addEventListener("click", function() {
    iframeBoletos.className = "display";
    iframeNfe.className = "iframe";
});