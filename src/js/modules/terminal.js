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
            name: '<span class="pink">Перенести песок с девелопа на первый</span>'
        },
        {
            name: '/tools/replace_sandbox_74.sh cbb 2.cbb develop.cbb copy awsdno_logs'
        },
        {
            name: '/tools/replace_sandbox_81.sh cbb 2.cbb develop.cbb copy logs'
        },
        {
            name: '<span class="pink">Перезалить песок</span>'
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

    // записываем значения в строку песка
    const cashNumbBtns = document.querySelectorAll('.terminal__cash-btn-numb');
    const cashProjectBtns = document.querySelectorAll('.terminal__cash-btn-projqct');

    const cashNumbDisplay = document.getElementById('cash-numb');
    const cashProjectDisplay = document.getElementById('cash-project');

    cashNumbBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            cashNumbDisplay.textContent = this.textContent;
            localStorage.setItem('cashNumb', this.textContent);
        });
    });

    cashProjectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            cashProjectDisplay.textContent = this.textContent;
            localStorage.setItem('cashProject', this.textContent);
        });
    });

    if (localStorage.getItem('cashNumb')) {
        cashNumbDisplay.textContent = localStorage.getItem('cashNumb');
    }

    if (localStorage.getItem('cashProject')) {
        cashProjectDisplay.textContent = localStorage.getItem('cashProject');
    }
}