const calcular = document.getElementById('calcular')

function imc(){
    const nome = document.getElementById('nome').valeu;
    const altura = document.getElementById('altura').valeu;
    const peso = document.getElementById('peso').valeu;
    const resultado = document.getElementById('resultado').valeu;

    const valorIMC = (peso/(altura*altura)).toFixed

    resultado.textContent = `${nome} seu IMC é ${valorIMC}!`;
}
calcular.addEventListener('click',imc);