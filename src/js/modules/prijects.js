export function projects() {
    document.querySelectorAll('.projects-btn').forEach(button => {
        button.addEventListener('click', () => {

            document.querySelectorAll('.projects-btn').forEach(btn => {
                btn.classList.remove('btn-active');
            });

            button.classList.add('btn-active');

            document.querySelectorAll('.content-block').forEach(block => {
                block.classList.remove('active');
            });

            const target = button.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
}