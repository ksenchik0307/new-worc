export function projects() {
    const buttons = document.querySelectorAll('.projects-btn');
    const blocks = document.querySelectorAll('.content-block');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {

            buttons.forEach(btn => btn.classList.remove('btn-active'));
            blocks.forEach(block => block.classList.remove('active'));

            buttons[i].classList.add('btn-active');

            blocks[i].classList.add('active');
        });
    }
}