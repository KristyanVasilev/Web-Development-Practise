function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach((button) => {
        button.addEventListener('click', onClick)
    });

    function onClick(event) {
        const parent = event.target.parentElement;

        const isUnlocked = parent.querySelector('input[value="unlock"]');
        if (isUnlocked.checked) {
            const hidenDiv = parent.querySelector('div');
            hidenDiv.style.display === 'block' ? hidenDiv.style.display = 'none' : hidenDiv.style.display = 'block';

            event.target.textContent === 'Show more' ? event.target.textContent = 'Hide it' : event.target.textContent = 'Show more';
        }
    }
}