const { expect } = require('chai');
const findNewApartment = require('./carService');

describe('findNewApartment', () => {
    describe('isGoodLocation', () => {
        it('should return the correct message when the value of the string city is different than a "Sofia", "Plovdiv" or "Varna"', () => {
            const city = "Burgas";
            const nearPublicTransportation = true;
            const result = findNewApartment.isGoodLocation(city, nearPublicTransportation);

            expect(result).to.equal(`This location is not suitable for you.`);
        });

        it('should return the correct message when the value of the boolean nearPublicTransportation is false', () => {
            const city = "Sofia";
            const nearPublicTransportation = false;
            const result = findNewApartment.isGoodLocation(city, nearPublicTransportation);

            expect(result).to.equal(`There is no public transport in area.`);
        });

        it('should return the correct message when the city and nearPublicTransportation are correct', () => {
            const city = "Sofia";
            const nearPublicTransportation = true;
            const result = findNewApartment.isGoodLocation(city, nearPublicTransportation);

            expect(result).to.equal(`You can go on home tour!`);
        });

        it('should throw an error when city is not a string', () => {
            const city = 1;
            const nearPublicTransportation = true;

            expect(() => findNewApartment.isGoodLocation(city, nearPublicTransportation)).to.throw('Invalid input!');
        });

        it('should throw an error when nearPublicTransportation is not a boolean', () => {
            const city = 'Sofia';
            const nearPublicTransportation = 'true';

            expect(() => findNewApartment.isGoodLocation(city, nearPublicTransportation)).to.throw('Invalid input!');
        });
    });

    describe('isLargeEnough', () => {
        it('should return the correct message when the inputs are correct', () => {
            const apartments = [40, 50, 60];
            const minimalSquareMeters = 20;
            const result = findNewApartment.isLargeEnough(apartments, minimalSquareMeters);
            expect(result).to.equal(`40, 50, 60`);
        });

        it('should throw an error when apartments is not an array', () => {
            const apartments = 'not an array';
            const minimalSquareMeters = 20;
            expect(() => findNewApartment.isLargeEnough(apartments, minimalSquareMeters)).to.throw('Invalid input!');
        });

        it('should throw an error when apartments is an empty array', () => {
            const apartments = [];
            const minimalSquareMeters = 20;
            expect(() => findNewApartment.isLargeEnough(apartments, minimalSquareMeters)).to.throw('Invalid input!');
        });

        it('should throw an error when minimalSquareMeters is not a number', () => {
            const apartments = [40, 50, 60];
            const minimalSquareMeters = 'not a number';
            expect(() => findNewApartment.isLargeEnough(apartments, minimalSquareMeters)).to.throw('Invalid input!');
        });
    });

    describe('isItAffordable', () => {
        it('should calculate if you can afford buying the apartment by subtracting the price of the apartment from your budget', () => {
            const price = 100;
            const budget = 200;
            const result = findNewApartment.isItAffordable(price, budget);
            expect(result).to.equal(`You can afford this home!`);
        });

        it('should return the corect message when the result is lower than 0', () => {
            const price = 300;
            const budget = 200;
            const result = findNewApartment.isItAffordable(price, budget);
            expect(result).to.equal(`You don't have enough money for this house!`);
        });

        it('should throw an error when the price is not a number', () => {
            const price = '300';
            const budget = 200;
            expect(() => findNewApartment.isItAffordable(price, budget)).to.throw('Invalid input!');
        });

        it('should throw an error when the budget is not a number', () => {
            const price = 300;
            const budget = '200';
            expect(() => findNewApartment.isItAffordable(price, budget)).to.throw('Invalid input!');
        });

        it('should throw an error when the price less than 0', () => {
            const price = -200;
            const budget = 200;
            expect(() => findNewApartment.isItAffordable(price, budget)).to.throw('Invalid input!');
        });

        it('should throw an error when the budget less than 0', () => {
            const price = 300;
            const budget = -200;
            expect(() => findNewApartment.isItAffordable(price, budget)).to.throw('Invalid input!');
        });

        it('should throw an error when the price equal to 0', () => {
            const price = 0;
            const budget = 200;
            expect(() => findNewApartment.isItAffordable(price, budget)).to.throw('Invalid input!');
        });

        it('should throw an error when the budget equal to 0', () => {
            const price = 300;
            const budget = 0;
            expect(() => findNewApartment.isItAffordable(price, budget)).to.throw('Invalid input!');
        });
    });
});