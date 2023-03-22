class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!this._validateModel(model)
            || !this._validateHorsepower(horsepower)
            || !this._validatePriceAndMileage(price)
            || !this._validatePriceAndMileage(mileage)) {
            throw new TypeError("Invalid input!");
        }

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const index = this.availableCars.findIndex(c => c.model == model);
        const car = this.availableCars[index];
        let soldPrice = 0;

        if (car == undefined) {
            throw new TypeError(`${model} was not found!`);
        }

        if (car.mileage <= desiredMileage) {
            soldPrice = car.price;
        }
        else if ((car.mileage - desiredMileage) <= 40000) {
            soldPrice = car.price * 0.95; //0.05
        }
        else {
            soldPrice = car.price * 0.9; //0.1
        }

        this.soldCars.push({
            model: car.model,
            horsepower: car.horsepower,
            soldPrice
        });

        this.availableCars.slice(index, 1);
        this.totalIncome += soldPrice;

        return `${car.model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length <= 0) {
            throw new TypeError('There are no available cars');
        }

        const result = ['-Available cars:',
            ...this.availableCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`)];

        return result.join('\n');
    }

    //The two possible criteria are – "horsepower" or "model"
    salesReport(criteria) {
        if (criteria == 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }
        else if (criteria == 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }
        else {
            throw new TypeError('Invalid criteria!');
        }

        const result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
        `-${this.soldCars.length} cars sold:`,
        ...this.soldCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`)];

        return result.join('\n');
    }

    //underscore methods should be private #methodName
    _validateModel(value) {
        return typeof value == 'string' && value != '';
    }

    _validateHorsepower(value) {
        return Number.isInteger(value) && value >= 0;
    }

    _validatePriceAndMileage(value) {
        return typeof value == 'number' && value >= 0;
    }
}

let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('Audi RS7', 410, 1000, 185000));
console.log(dealership.currentCar());
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
console.log(dealership.sellCar('Audi RS7', 110000));
console.log(dealership.salesReport('horsepower'));
console.log(dealership.salesReport('model'));