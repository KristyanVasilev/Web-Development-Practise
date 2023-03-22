const { expect } = require('chai');
const chooseYourCar = require('./chooseYourCar');

describe('chooseYourCar', () => {
    describe('choosingType', () => {
        it('should return the correct message when the year of the car is greater or equal to 2010', () => {
            const type = "Sedan";
            const color = "red";
            const year = 2020;
            const result = chooseYourCar.choosingType(type, color, year);
            expect(result).to.equal(`This ${color} ${type} meets the requirements, that you have.`);
        });

        it('should throw an error when the type is not sedan', () => {
            const type = "Coupe";
            const color = "red";
            const year = 2020;
            expect(() => chooseYourCar.choosingType(type, color, year)).to.throw('This type of car is not what you are looking for.');
        });

        it('should throw an error when year of the car is less to 2010', () => {
            const type = "Sedan";
            const color = "red";
            const year = 1999;
            const result = chooseYourCar.choosingType(type, color, year);
            expect(result).to.equal(`This ${type} is too old for you, especially with that ${color} color.`);
        });

        it('should throw an error when the year is less than 1900', () => {
            const type = "Sedan";
            const color = "red";
            const year = 1700;
            expect(() => chooseYourCar.choosingType(type, color, year)).to.throw('Invalid Year!');
        });

        it('should throw an error when the year is more than 2022', () => {
            const type = "Sedan";
            const color = "red";
            const year = 2400;
            expect(() => chooseYourCar.choosingType(type, color, year)).to.throw('Invalid Year!');
        });
    });

    describe('brandName', () => {
        it('should return the changed array of brands as a string, joined by a comma and a space', () => {
            const brands = ['BMW', 'Toyota', 'Mercedes'];
            const index = 1;
            const result = chooseYourCar.brandName(brands, index);
            expect(result).to.equal(`BMW, Mercedes`);
        });

        it('should throw an error when index is not a number', () => {
            const brands = ['BMW', 'Toyota', 'Mercedes'];
            const index = '1';
            expect(() => chooseYourCar.brandName(brands, index)).to.throw('Invalid Information!');
        });

        it('should throw an error when index is outside the limits of the array', () => {
            const brands = ['BMW', 'Toyota', 'Mercedes'];
            const index = 100;
            expect(() => chooseYourCar.brandName(brands, index)).to.throw('Invalid Information!');
        });

        it('should throw an error when index is negative', () => {
            const brands = ['BMW', 'Toyota', 'Mercedes'];
            const index = -100;
            expect(() => chooseYourCar.brandName(brands, index)).to.throw('Invalid Information!');
        });

        it('should throw an error when index is double', () => {
            const brands = ['BMW', 'Toyota', 'Mercedes'];
            const index = 2.5;
            expect(() => chooseYourCar.brandName(brands, index)).to.throw('Invalid Information!');
        });

        it('should throw an error when brands is not an array', () => {
            const brands = 'not array';
            const index = 100;
            expect(() => chooseYourCar.brandName(brands, index)).to.throw('Invalid Information!');
        });
    });

    describe('CarFuelConsumption', () => {
        it('should return the correct message when the liters/100km is less or equal to 7L', () => {
            const distanceInKilometers = 100;
            const consumptedFuelInLitres = 3;
            const result = chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLitres);
            expect(result).to.equal(`The car is efficient enough, it burns 3.00 liters/100 km.`);
        });

        it('should return the correct message when the liters/100km is higher to 7L', () => {
            const distanceInKilometers = 100;
            const consumptedFuelInLitres = 10;
            const result = chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLitres);
            expect(result).to.equal(`The car burns too much fuel - 10.00 liters!`);
        });

        it('should throw an error when the distanceInKilometers is not a number', () => {
            const distanceInKilometers = '100';
            const consumptedFuelInLitres = 10;
            expect(() => chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLitres)).to.throw('Invalid Information!');
        });

        it('should throw an error when the distanceInKilometers is negative', () => {
            const distanceInKilometers = -100;
            const consumptedFuelInLitres = 10;
            expect(() => chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLitres)).to.throw('Invalid Information!');
        });

        it('should throw an error when the consumptedFuelInLitres is not a number', () => {
            const distanceInKilometers = 100;
            const consumptedFuelInLitres = '10';
            expect(() => chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLitres)).to.throw('Invalid Information!');
        });

        it('should throw an error when the consumptedFuelInLitres is negative', () => {
            const distanceInKilometers = 100;
            const consumptedFuelInLitres = -10;
            expect(() => chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLitres)).to.throw('Invalid Information!');
        });
    });
});