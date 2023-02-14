window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const dateInInput = document.getElementById('date-in');
    const dateOutInput = document.getElementById('date-out');
    const peopleInput = document.getElementById('people-count');
    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const verification = document.querySelector('#verification');
    nextBtn = document.getElementById('next-btn').addEventListener('click', onReserve);

    function onReserve(event) {
        event.preventDefault();
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const dateIn = dateInInput.value;
        const dateOut = dateOutInput.value;
        const people = peopleInput.value;

        if (firstName == '' || lastName == '' || dateIn == ''
            || dateOut == '' || people == '' || new Date(dateIn) >= new Date(dateOut)) {
            return;
        }

        const element = document.createElement('li');
        element.className = 'reservation-content';
        element.innerHTML = `
        <article>
        <h3>Name: ${firstName} ${lastName}</h3>
        <p>From date: ${dateIn}</p>
        <p>To date: ${dateOut}</p>
        <p>For ${people} people</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>`;

        editBtn = element.querySelector('.edit-btn').addEventListener('click', () => edit(element));
        continueBtn = element.querySelector('.continue-btn').addEventListener('click', () => onContinue(element));

        infoList.appendChild(element);
        resetInput();

        function edit(source) {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            dateInInput.value = dateIn;
            dateOutInput.value = dateOut;
            peopleInput.value = people;

            source.remove();
        }

        function onContinue(source) {
            const continueElement = document.createElement('li');
            continueElement.className = 'reservation-content';
            continueElement.innerHTML = `
            <article>
            <h3>Name: ${firstName} ${lastName}</h3>
            <p>From date: ${dateIn}</p>
            <p>To date: ${dateOut}</p>
            <p>For ${people} people</p>
            </article>
            <button class="confirm-btn">Confirm</button>
            <button class="cancel-btn">Cancel</button>`;

            confirmList.appendChild(continueElement);
            confirmBtn = continueElement.querySelector('.confirm-btn').addEventListener('click', () => confirm(continueElement));
            cancelBtn = continueElement.querySelector('.cancel-btn').addEventListener('click', () => cancel(continueElement));
            source.remove();
        }

        function confirm(source) {
            verification.textContent = 'Confirmed.'
            verification.className = 'reservation-confirmed';

            source.remove();
        }

        function cancel(source) {
            verification.textContent = 'Cancelled.'
            verification.className = 'reservation-cancelled';

            source.remove();
        }
    }

    function resetInput() {
        firstNameInput.value = '';
        lastNameInput.value = '';
        dateInInput.value = '';
        dateOutInput.value = '';
        peopleInput.value = '';
    }
}





