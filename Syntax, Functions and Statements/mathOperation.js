function operations(a, b, operator) {
    let result;

    if (operator == '-') {
        result = a - b;
    }
    else if (operator == '+') {
        result = a + b;    
    }
    else if (operator == '*') {
        result = a * b;    
    }
    else if (operator == '/') {
        result = a / b;    
    }
    else if (operator == '%') {
        result = a % b;    
    }
    else if (operator == '**') {
        result = a ** b;    
    }

    console.log(result);
}

operations(5, 6, '+');
operations(3, 5.5, '*');