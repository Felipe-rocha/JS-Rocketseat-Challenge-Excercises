var geraEndereco = document.querySelector(".botao-endereco");

geraEndereco.addEventListener("click", function(){

    endereco = coletaDados();
   
    ZeraDiv();
    
    GeraElemento(endereco);

});


function coletaDados(){
    var obtemDados = document.querySelectorAll(".campo");

      var array = obtemDados;

    var endereco = 'O usuário mora em 3 / 4, no bairro 2, na rua 0 com nº 1.'

    obtemDados.forEach(function(dados, i){
        var itemDados = dados.value;
        endereco = endereco.replace(i, itemDados);
    })

    return endereco;
}


function ZeraDiv(){
    document.querySelector(".resposta").innerHTML = '';
}

function GeraElemento(endereco){
    var insereTexto = document.createElement("label");
    insereTexto.classList.add('endereco')
    var criaBr = document.createElement("br");
    insereTexto.innerHTML = endereco;

    var PrimeiroModuloh2 = document.querySelector(".resposta");
    PrimeiroModuloh2.appendChild(criaBr);
    PrimeiroModuloh2.appendChild(insereTexto);
}
