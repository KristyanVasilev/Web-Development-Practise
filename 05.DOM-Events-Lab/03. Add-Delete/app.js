function addItem() {
    const input = document.getElementById('newItemText').value;
    const li = document.createElement('li');
    li.textContent = input;

    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', () => {
        const choice = confirm('Are you sure?');
        if (choice) {
            li.remove()
        }
    });
    li.appendChild(deleteBtn);

    const items = document.getElementById('items');
    items.appendChild(li);
}