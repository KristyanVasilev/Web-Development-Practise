function addItem() {
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.textContent = text.value;
    option.value = value.value;

    const menu = document.getElementById('menu').appendChild(option);

    text.value = "";
    value.value = "";
}