export function home() {
    const dataMargin = [
        {
            name1: 'm-1',
            name2: 'margin:',
            name3: '0.25rem',
            name4: '4px'
        },
        {
            name1: 'm-2',
            name2: 'margin:',
            name3: '0.5rem',
            name4: '8px'
        },
        {
            name1: 'm-3',
            name2: 'margin:',
            name3: '1rem',
            name4: '16px'
        },
        {
            name1: 'm-4',
            name2: 'margin:',
            name3: '1.5rem',
            name4: '24px'
        },
        {
            name1: 'm-5',
            name2: 'margin:',
            name3: '3rem',
            name4: '48px'
        },
    ];

    const parentMargin = document.querySelector('.parent-margin');

    for (let i = 0; i < dataMargin.length; i++) {
        const item = dataMargin[i];

        const markup = `
        <tr>
            <td class="child-1">${item.name1}</td>
            <td>
               <div class="child-2">
                  <p>${item.name2}</p>
                  <p>${item.name3}</p>
               </div>
            </td>
            <td class="child-3">${item.name4}</td>
         </tr>
    `;

        parentMargin.insertAdjacentHTML('beforeend', markup);
    }
    
    //калькулятор
    const remInput = document.getElementById('rem');
    const pxInput = document.getElementById('px');
    const exchangeRate = 16;

    remInput.addEventListener('input', function() {
        const remAmount = parseFloat(remInput.value);
        pxInput.value = remAmount * exchangeRate;
    });

    pxInput.addEventListener('input', function() {
        const pxAmount = parseFloat(pxInput.value);
        remInput.value = pxAmount / exchangeRate;
    });
}