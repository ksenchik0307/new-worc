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

    const dataMedia = [
        {
            name1: 'ml-<span class="blue">sm</span>-1',
            name2: '(min-width: 576px)'
        },
        {
            name1: 'ml-<span class="blue">md</span>-1',
            name2: '(min-width: 768px)'
        },
        {
            name1: 'ml-<span class="blue">lg</span>-1',
            name2: '(min-width: 992px)'
        },
        {
            name1: 'ml-<span class="blue">xl</span>-1',
            name2: '(min-width: 1200px)'
        },
    ]

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

    const parentMedia = document.querySelector('.parent-media');

    for (let i = 0; i < dataMedia.length; i++) {
        const item = dataMedia[i];

        const markup = `
        <tr>
            <td class="child-1">${item.name1}</td>            
            <td class="child-3">${item.name2}</td>
         </tr>
    `;

        parentMedia.insertAdjacentHTML('beforeend', markup);
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