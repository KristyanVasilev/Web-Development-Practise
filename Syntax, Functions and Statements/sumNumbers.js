function sumNumbers(a, b) {
    let result = 0;
    let number1 = Number(a);
    let number2 = Number(b);

    for (let i = number1; i <= number2; i++) {
        result += i;     
    }

    console.log(result);
}

sumNumbers('1', '5' );