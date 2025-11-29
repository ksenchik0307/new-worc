import {copyToClipboard} from "./helper.js";

export function terminal() {
    const projectsContainer = document.getElementById('projects-container');
    const addProjectInput = document.getElementById('add-project-input');
    const removeProjectInput = document.getElementById('remove-project-input');
    const cashNumbDisplays = document.querySelectorAll('.cash-numb');
    const cashProjectDisplays = document.querySelectorAll('.cash-project');
    const terminalLogDisplay = document.querySelector('.terminal-res-log');
    const linkDisplay = document.getElementById('dynamic-link');

    let projects = JSON.parse(localStorage.getItem('projects'));

    if (!projects) {
        projects = ['yoolearn', 'ym'];
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    function renderProjects() {
        projectsContainer.innerHTML = '';

        projects.forEach(project => {
            const projectBtn = document.createElement('div');
            projectBtn.textContent = project;
            projectBtn.className = 'terminal__cash-btn-projqct';
            projectBtn.addEventListener('click', function() {
                localStorage.setItem('selectedProject', project);
                cashProjectDisplays.forEach(span => {
                    span.textContent = project;
                });
                updateLink();
            });
            projectsContainer.appendChild(projectBtn);
        });
    }

    const numberButtons = document.querySelectorAll('.terminal__cash-btn-numb');
    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedNumber = this.textContent;

            localStorage.setItem('selectedNumber', selectedNumber);
            cashNumbDisplays.forEach(span => {
                span.textContent = selectedNumber;
            });
            updateLink();
        });
    });

    const logButtons = document.querySelectorAll('.terminal__cash-btn-log');
    logButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLog = this.textContent;
            terminalLogDisplay.textContent = selectedLog;
        });
    });

    document.getElementById('add-project-btn').addEventListener('click', function() {
        const newProject = addProjectInput.value.trim();
        if (newProject && !projects.includes(newProject)) {
            projects.push(newProject);
            localStorage.setItem('projects', JSON.stringify(projects));
            addProjectInput.value = '';
            renderProjects();
        }
    });

    document.getElementById('remove-project-btn').addEventListener('click', function() {
        const projectToRemove = removeProjectInput.value.trim();
        if (projectToRemove && projects.includes(projectToRemove)) {
            projects = projects.filter(project => project !== projectToRemove);
            localStorage.setItem('projects', JSON.stringify(projects));
            removeProjectInput.value = '';
            renderProjects();
        }
    });

    function updateLink() {
        const selectedNumber = localStorage.getItem('selectedNumber') || "";
        const selectedProject = localStorage.getItem('selectedProject') || "";

        const generatedUrl = `https://${selectedNumber}.${selectedProject}.d2.3dev.tech`;
        linkDisplay.textContent = generatedUrl;
        linkDisplay.href = generatedUrl;
    }

    renderProjects();

    const storedNumber = localStorage.getItem('selectedNumber');
    const storedProject = localStorage.getItem('selectedProject');

    if (storedNumber) {
        cashNumbDisplays.forEach(span => {
            span.textContent = storedNumber;
        });
    }

    if (storedProject) {
        cashProjectDisplays.forEach(span => {
            span.textContent = storedProject;
        });
    }

    updateLink();

    const copyCashBtn = document.querySelector('.copy-cash');
    const copySandBtn = document.querySelector('.copy-sand');
    const copySandMinBtn = document.querySelector('.copy-sand-min');
    const copyCashRes = document.getElementById('copy-cash');
    const copySandRes = document.getElementById('copy-sand');
    const copySandMinRes = document.getElementById('copy-sand-min');

    copyCashBtn.addEventListener('click', function () {
        copyToClipboard(copyCashRes.textContent);
    });
    copySandBtn.addEventListener('click', function () {
        copyToClipboard(copySandRes.textContent);
    });
    copySandMinBtn.addEventListener('click', function () {
        copyToClipboard(copySandMinRes.textContent);
    });
}