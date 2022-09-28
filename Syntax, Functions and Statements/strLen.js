function avgLen(a, b, c) {
    let lenA = a.length;
    let lenB = b.length;
    let lenC = c.length;

    let totalLen = lenA + lenB + lenC;
    let avg = Math.floor(totalLen / 3);

    console.log(totalLen);
    console.log(avg);
}

avgLen('chocolate', 'ice cream', 'cake');