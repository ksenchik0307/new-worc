export function terminal () {
    const dataGit = [
        {
            name: 'git submodule update --force --recursive --init --remote'
        },
        {
            name: 'feature/theme_vtb/VTBVTB-97'
        },
        {
            name: 'feature/theme_emerald/CBB-55'
        },
        {
            name: 'feature/theme_ppls/AF-1024'
        },
        {
            name: 'feature/theme_imperial/YOOLEARN-14'
        },
        {
            name: 'feature/local_ebt/PPLS-652'
        },
        {
            name: 'feature/theme_emerald/CBB-29'
        },
        {
            name: 'feature/theme_forest/SHELL-529'
        },
        {
            name: 'FINAL.WIP.Draft'
        },
    ]

    const dataSandbox = [
        {
            name: '<b><u>Перенести песок с девелопа на первый</u></b>'
        },
        {
            name: '/tools/replace_sandbox_74.sh cbb 2.cbb develop.cbb copy awsdno_logs'
        },
        {
            name: '/tools/replace_sandbox_81.sh cbb 2.cbb develop.cbb copy logs'
        },
        {
            name: '<b><u>Перезалить песок</u></b>'
        },
        {
            name: '/tools/replace_sandbox_postgres_81.sh yoolearn 2.yoolearn develop.yoolearn copy no_logs'
        },
    ]

    const parentGit = document.querySelector('.terminal__git');

    for (let i = 0; i < dataGit.length; i++) {
        const item = dataGit[i];

        const markup = `
        <tr>
            <td>${item.name}</td>
         </tr>
    `;

        parentGit.insertAdjacentHTML('beforeend', markup);
    }

    const parentSandbox = document.querySelector('.terminal__sandbox');

    for (let i = 0; i < dataSandbox.length; i++) {
        const item = dataSandbox[i];

        const markup = `
        <tr>
            <td>${item.name}</td>
         </tr>
    `;

        parentSandbox.insertAdjacentHTML('beforeend', markup);
    }

    // записываем данные в строку песка
    const cashNumbBtns = document.querySelectorAll('.terminal__cash-btn-numb');
    const cashProjectBtns = document.querySelectorAll('.terminal__cash-btn-projqct');

    const cashNumbDisplay = document.getElementById('cash-numb');
    const cashProjectDisplay = document.getElementById('cash-project');

    cashNumbBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            cashNumbDisplay.textContent = this.textContent; // Записываем текст в элемент cash-numb
            localStorage.setItem('cashNumb', this.textContent); // Сохраняем значение в Local Storage
        });
    });

    cashProjectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            cashProjectDisplay.textContent = this.textContent; // Записываем текст в элемент cash-project
            localStorage.setItem('cashProject', this.textContent); // Сохраняем значение в Local Storage
        });
    });

    if (localStorage.getItem('cashNumb')) {
        cashNumbDisplay.textContent = localStorage.getItem('cashNumb');
    }

    if (localStorage.getItem('cashProject')) {
        cashProjectDisplay.textContent = localStorage.getItem('cashProject');
    }
}