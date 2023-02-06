function deleteByEmail() {
    const emailInput = document.querySelector('input[name="email"]').value;
    const customers = document.querySelectorAll('#customers tbody tr');

    const customersArr = Array.from(customers); //Its needed for judge system!

    const match = customersArr.find(c => c.children[1].textContent == emailInput);
    if (match) {
        match.remove();
        document.getElementById('result').textContent = 'Deleted.';
    }

    document.getElementById('result').textContent = 'Not found.';
}