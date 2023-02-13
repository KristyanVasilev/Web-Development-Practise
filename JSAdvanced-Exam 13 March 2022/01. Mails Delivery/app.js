function solve() {
    const nameInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');
    const list = document.getElementById('list');
    const sent = document.querySelector('.sent-list');
    const deleted = document.querySelector('.delete-list');

    addBtn = document.getElementById('add').addEventListener('click', createMail);
    resetBtn = document.getElementById('reset').addEventListener('click', onReset);

    function createMail(event) {
        event.preventDefault();
        const name = nameInput.value;
        const title = titleInput.value;
        const message = messageInput.value;

        if (name == '' || title == '' || message == '') {
            return;
        }

        const element = document.createElement('li');
        element.innerHTML = `
        <h4>Title: ${title}</h4>
        <h4>Recipient Name: ${name}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`

        sendBtn = element.querySelector('#send').addEventListener('click', sendMail);
        delteBtn = element.querySelector('#delete').addEventListener('click', () => deleteMail(element));

        list.appendChild(element);
        resetInput();

        function sendMail() {
            const sentMailElement = document.createElement('li');
            sentMailElement.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`;

            sentMailElement.querySelector('.delete').addEventListener('click', () => deleteMail(sentMailElement));

            sent.appendChild(sentMailElement);
            element.remove();
        }

        function deleteMail(source) {
            const deleteMailElement = document.createElement('li');
            deleteMailElement.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>`;

            deleted.appendChild(deleteMailElement);
            source.remove();
        }
    }

    function onReset(event) {
        event.preventDefault();
        resetInput();
    }

    function resetInput() {
        nameInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    }
}
solve()