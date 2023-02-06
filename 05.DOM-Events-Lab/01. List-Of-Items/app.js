function addItem() {

    const text = document.getElementById('newItemText').value;
    const li = document.createElement('li');
    li.textContent = text;

    const list = document.getElementById('items');
    list.appendChild(li);
}