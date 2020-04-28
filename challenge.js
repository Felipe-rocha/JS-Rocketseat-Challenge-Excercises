var geraEndereco = document.querySelector(".botao-endereco");


geraEndereco.addEventListener("click", function(){

    coletaDados();

    var insereTexto = document.createElement("label");
    var criaBr = document.createElement("br");
    insereTexto.innerHTML = "alou";

    var PrimeiroModuloh2 = document.querySelector(".primeiro-modulo");
    PrimeiroModuloh2.appendChild(criaBr);
    PrimeiroModuloh2.appendChild(insereTexto);

});


function coletaDados(){
    var obtemDados = document.querySelectorAll(".campo");

    var array = obtemDados;

    var endereco = "O usuário mora em 3 / 4, no bairro 2, na rua 0 com nº 2."

    obtemDados.forEach(function(dados, i){
        var itemDados = dados.value;
        
        console.log(i.toString(), itemDados);
        endereco.replace(i, itemDados);
        console.log(endereco);

        console.log(mudaTextoX);
    })
    
}
