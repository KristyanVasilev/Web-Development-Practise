function greetingByName(input) {
    let name = input.shift();
    let age = Number(input.shift());
    let town = input.shift();
    console.log(`Hello, ${name}! My age is ${age} and I live in ${town}.`)
}

greetingByName(["Pesho", 20, "Sofia"])