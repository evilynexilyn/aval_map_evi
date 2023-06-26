window.addEventListener('DOMContentLoaded', () => {
    // Obtém referências para os elementos HTML relevantes
    const botao = document.getElementById('botao');
    const num = document.getElementById('num');
    const resultado = document.getElementById('resultado');

    botao.addEventListener('click', () => {
        
        const numbersString = num.value;
        const numbersArray = numbersString.split(',');

        const resultArray = numbersArray.map((number) => {
            return parseInt(number);
        });

        // Utiliza a função reduce() para multiplicar todos os números do array resultante
        const product = resultArray.reduce((accumulator, currentValue) => {
            return accumulator * currentValue;
        }, 1);

        resultado.textContent = `O produto dos números é: ${product}`;
    });
});