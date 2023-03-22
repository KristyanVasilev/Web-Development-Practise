function solve() {
    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const birthInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');
    const table = document.getElementById('tbody');
    const budget = document.getElementById('sum');
    let totalSalary = 0.00;

    hireBtn = document.getElementById('add-worker').addEventListener('click', hire);

    function hire(event) {
        event.preventDefault();
        const fname = fnameInput.value;
        const lname = lnameInput.value;
        const email = emailInput.value;
        const birth = birthInput.value;
        const position = positionInput.value;
        const salary = salaryInput.value;
        if (fname == '' || lname == '' || email == ''
            || birth == '' || position == '' || salary == '') {
            return;
        }

        totalSalary += Number(salary);
        budget.textContent = totalSalary.toFixed(2);

        const element = document.createElement('tr');
        element.innerHTML = `
        <td>${fname}</td>
        <td>${lname}</td>
        <td>${email}</td>
        <td>${birth}</td>
        <td>${position}</td>
        <td>${salary}</td>
        <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>`;

        sendBtn = element.querySelector('.fired').addEventListener('click', () => fired(element));
        delteBtn = element.querySelector('.edit').addEventListener('click', () => edit(element));

        table.appendChild(element);
        resetInput();

        function fired(source) {
            totalSalary -= Number(salaryInput.value = source.querySelectorAll('td')[5].textContent);
            budget.innerHTML = totalSalary.toFixed(2);

            source.remove();
        }

        function edit(source) {
            fnameInput.value = source.querySelectorAll('td')[0].textContent;
            lnameInput.value = source.querySelectorAll('td')[1].textContent;
            emailInput.value = source.querySelectorAll('td')[2].textContent;
            birthInput.value = source.querySelectorAll('td')[3].textContent;
            positionInput.value = source.querySelectorAll('td')[4].textContent;
            salaryInput.value = source.querySelectorAll('td')[5].textContent;
            totalSalary -= Number(salaryInput.value = source.querySelectorAll('td')[5].textContent);
            budget.textContent = totalSalary.toFixed(2);

            source.remove();
        }
    }

    function resetInput() {
        fnameInput.value = '';
        lnameInput.value = '';
        emailInput.value = '';
        birthInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';
    }
}
solve()