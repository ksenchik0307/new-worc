export function terminal () {
    const dataCash = [
        {
            name: 'php8.1 web/1.saib.d2.3dev.tech/public_html/admin/cli/purge_caches.php'
        },
        {
            name: 'php8.1 web/3.vtb.d2.3dev.tech/public_html/admin/cli/purge_caches.php'
        },
        {
            name: 'php8.1 web/2.yoolearn.d2.3dev.tech/public_html/admin/cli/purge_caches.php'
        },
        {
            name: 'php8.1 web/2.cbb.d2.3dev.tech/public_html/admin/cli/purge_caches.php'
        },
        {
            name: 'php8.1 web/1.teboil.d2.3dev.tech/public_html/admin/cli/purge_caches.php'
        },
    ]

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

    const parentCash = document.querySelector('.terminal__cash');

    for (let i = 0; i < dataCash.length; i++) {
        const item = dataCash[i];

        const markup = `
        <tr>
            <td>${item.name}</td>
         </tr>
    `;

        parentCash.insertAdjacentHTML('beforeend', markup);
    }

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
}