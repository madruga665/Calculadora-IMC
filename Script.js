var resultadoIMC = document.getElementById("calcular");
resultadoIMC.addEventListener("click", calculaIMC);

function calculaIMC() {
//calculaIMC = peso / (altura * altura);

    var nome = document.getElementById("nome").value;    
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    
    resultadoIMC = ( peso / (altura * altura)).toFixed(2);
    document.getElementById("resultado").innerHTML = `${nome}, Seu IMC é: ${resultadoIMC}`;

}
