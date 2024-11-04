export function calculator() {

    //калькулятор
    const remInput = document.getElementById('rem');
    const pxInput = document.getElementById('px');
    const exchangeRate = 16;
    const resultSpan = document.getElementById('home__calculator-result');

    remInput.addEventListener('input', function() {
        const remAmount = parseFloat(remInput.value);
        pxInput.value = remAmount * exchangeRate;
        resultSpan.textContent = remAmount;
    });

    pxInput.addEventListener('input', function() {
        const pxAmount = parseFloat(pxInput.value);
        remInput.value = pxAmount / exchangeRate;
        resultSpan.textContent = pxAmount / exchangeRate;
    });
}