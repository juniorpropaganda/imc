function calcularImc() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resultado = document.getElementById("resultado");



    altura = altura.replace(",", ".");
    peso = peso.replace(",", ".");

    var calculo = peso / (altura * altura);
    calculo = calculo.toFixed(2);

    resultado.innerHTML =  calculo + "<br>";

    if (calculo < 18.5) {
        resultado.innerHTML += "Abaixo do peso";
    } else if (calculo >= 18.5 && calculo <= 24.9) {
        resultado.innerHTML += "Peso ideal";
    } else if (calculo >= 25 && calculo <= 29.9) {
        resultado.innerHTML += "Levemente acima do peso";
    } else if (calculo >= 30 && calculo <= 34.9) {
        resultado.innerHTML += "Obesidade grau I";
    } else if (calculo >= 35 && calculo <= 39.9) {
        resultado.innerHTML += "Obesidade grau II";
    } else if (calculo >= 40) {
        resultado.innerHTML += "Obesidade grau III";
    } 

}