window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const numOfPeopleInput = document.getElementById('people-count');
    const fromDateInput = document.getElementById('from-date');
    const daysInput = document.getElementById('days-count');
    nextBtn = document.getElementById('next-btn').addEventListener('click', next);
    const ticketList = document.querySelector('.ticket-info-list');
    const confirmList = document.querySelector('.confirm-ticket');

    function next(event) {
        event.preventDefault();
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const numOfPeople = numOfPeopleInput.value;
        const fromDate = fromDateInput.value;
        const days = daysInput.value;

        if (firstName == '' || lastName == '' || numOfPeople == ''
            || fromDate == '' || days == '') {
            return;
        }

        const element = document.createElement('li');
        element.className = 'ticket';
        element.innerHTML = `
        <article>
        <h3>Name: ${firstName} ${lastName}</h3>
        <p>From date: ${fromDate}</p>
        <p>For ${days} days</p>
        <p>For ${numOfPeople} people</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>`;

        editBtn = element.querySelector('.edit-btn').addEventListener('click', () => edit(element));
        continueBtn = element.querySelector('.continue-btn').addEventListener('click', () => onContinue(element));
        nextBtn = document.getElementById('next-btn').disabled = true;

        ticketList.appendChild(element);
        resetInput();

        function edit(source) {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            numOfPeopleInput.value = numOfPeople;
            fromDateInput.value = fromDate;
            daysInput.value = days;

            source.remove();
            nextBtn = document.getElementById('next-btn').disabled = false;
        }

        function onContinue(source) {

            const continueElement = document.createElement('li');
            continueElement.className = 'ticket-content';
            continueElement.innerHTML = `
            <article>
            <h3>Name: ${firstName} ${lastName}</h3>
            <p>From date: ${fromDate}</p>
            <p>For ${days} days</p>
            <p>For ${numOfPeople} people</p>
            </article>
            <button class="confirm-btn">Confirm</button>
            <button class="cancel-btn">Cancel</button>`;

            confirmList.appendChild(continueElement);
            source.remove();
            nextBtn = document.getElementById('next-btn').disabled = true;

            confirmBtn = continueElement.querySelector('.confirm-btn').addEventListener('click', () => confirm(continueElement));
            cancelBtn = continueElement.querySelector('.cancel-btn').addEventListener('click', () => cancel(continueElement));

            function cancel(source) {
                source.remove();
                nextBtn = document.getElementById('next-btn').disabled = false;
            }

            function confirm() {
                const mainDiv = document.getElementById('main');
                mainDiv.remove();

                const thankYou = document.createElement('h1');
                thankYou.id = 'thank-you';
                thankYou.textContent = 'Thank you, have a nice day!';

                const backBtn = document.createElement('button');
                backBtn.id = 'back-btn';
                backBtn.textContent = 'Back';

                const newDiv = document.createElement('div');
                newDiv.id = 'main';
                newDiv.appendChild(thankYou);
                newDiv.appendChild(backBtn);

                const bodyElement = document.querySelector('body');
                bodyElement.appendChild(newDiv);
            }
        }
    }

    function resetInput() {
        firstNameInput.value = '';
        lastNameInput.value = '';
        numOfPeopleInput.value = '';
        fromDateInput.value = '';
        daysInput.value = '';
    }
}




