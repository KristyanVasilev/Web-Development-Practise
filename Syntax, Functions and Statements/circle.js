function circleArea(radius) {
    if (typeof radius != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
        return;
    }
    let area = radius ** 2 * Math.PI;

    console.log(area.toFixed(2));
}

circleArea(5);
circleArea('maria');