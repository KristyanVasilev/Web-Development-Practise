function largestNum(a, b, c) {
    let result;

    if (a > b && a > c) {
        result = a;
    }else if (b > a && b > c) {
        result = b;
    } else{
        result = c;
    }
    
    console.log(`The largest number is ${result}.`);
}

largestNum(-3, -5, -22.5);

function largestNumWithMathMax(a, b, c) {
    let result = Math.max(a, b, c);
       
    console.log(`The largest number is ${result}.`);
}

largestNumWithMathMax(5, -3, 16);
