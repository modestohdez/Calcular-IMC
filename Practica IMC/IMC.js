document.getElementById('formIMC').addEventListener('submit', function(event) {
    event.preventDefault();

    var Peso = parseFloat(document.getElementById('peso').value);
    var Estatura = parseFloat(document.getElementById('estatura').value);

    var imc = Peso / (Estatura * Estatura);

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'TU IMC ES: ' + imc.toFixed(2);

    if (imc < 18.5) {
        resultado.innerHTML += '<br> Desnutrición';
    } else if (imc < 25) {
        resultado.innerHTML += '<br> Peso normal';
    } else if (imc < 30) {
        resultado.innerHTML += '<br> Sobrepeso';
    } else {
        resultado.innerHTML += '<br> Obesidad';
    }
});

