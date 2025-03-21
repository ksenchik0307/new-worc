import {copyToClipboard} from "./helper.js";

export function calculator() {

    //калькулятор
    const remInput = document.getElementById('rem');
    const pxInput = document.getElementById('px');
    const exchangeRate = 16;
    const resultSpan = document.getElementById('home__calculator-result');

    remInput.addEventListener('input', function() {
        const remAmount = parseFloat(remInput.value);
        pxInput.value = remAmount * exchangeRate;
        resultSpan.textContent = remAmount < 1 ? remAmount.toString().replace(/^0/, '') : remAmount;
    });

    pxInput.addEventListener('input', function() {
        const pxAmount = parseFloat(pxInput.value);
        remInput.value = pxAmount / exchangeRate;
        resultSpan.textContent = (pxAmount / exchangeRate) < 1 ? (pxAmount / exchangeRate).toString().replace(/^0/, '') : (pxAmount / exchangeRate);
    });

    const copySracerBtn = document.querySelector('.copy_spacer');
    const copyResSpacBtn = document.querySelector('.home_result');

    copySracerBtn.addEventListener('click', function () {
        copyToClipboard(copyResSpacBtn.textContent);
    });
}