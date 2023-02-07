function encodeAndDecodeMessages() {
    const textAreas = document.querySelectorAll('textarea');
    const btns = document.querySelectorAll('button');
    btns[0].addEventListener('click', encode);
    btns[1].addEventListener('click', decode);

    function encode() {
        let encodeMessage = "";
        const input = textAreas[0].value;

        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            encodeMessage += String.fromCharCode(element.charCodeAt(0) + 1);
        }

        textAreas[1].value = encodeMessage;
        textAreas[0].value = "";
    }

    function decode() {
        const message = textAreas[1].value;
        let decodedMessage = "";

        for (let index = 0; index < message.length; index++) {
            const element = message[index];
            decodedMessage += String.fromCharCode(element.charCodeAt(0) - 1);
        }

        textAreas[1].value = decodedMessage;
    }
}