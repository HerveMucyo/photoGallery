document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.info button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            alert(`More information about ${e.target.closest('.info').querySelector('h3').textContent}`);
        });
    });
});