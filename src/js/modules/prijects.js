export function projects() {
    const buttons = document.querySelectorAll('.projects-btn');
    const blocks = document.querySelectorAll('.content-block');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {

            buttons.forEach(btn => btn.classList.remove('active'));
            blocks.forEach(block => block.classList.remove('active'));

            buttons[i].classList.add('active');

            blocks[i].classList.add('active');
        });
    }
}