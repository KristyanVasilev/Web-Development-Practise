const { expect } = require('chai');
const rentCar = require('./rentCar');

describe('rentCar', () => {
    describe('searchCar', () => {
        it('should return the correct message when the model is found in the shop', () => {
            const shop = ["Volkswagen", "BMW", "Audi"];
            const model = "BMW";
            const result = rentCar.searchCar(shop, model);
            expect(result).to.equal(`There is 1 car of model ${model} in the catalog!`);
        });

        it('should throw an error when the model is not found in the shop', () => {
            const shop = ["Volkswagen", "Audi"];
            const model = "BMW";
            expect(() => rentCar.searchCar(shop, model)).to.throw('There are no such models in the catalog!');
        });

        it('should throw an error when the input is invalid', () => {
            const shop = ["Volkswagen", "Audi"];
            const model = 123;
            expect(() => rentCar.searchCar(shop, model)).to.throw('Invalid input!');
        });
    });

    describe('calculatePriceOfCar', () => {
        it('should return the correct message when the model exists in the catalogue', () => {
            const model = 'Volkswagen';
            const days = 5;
            const result = rentCar.calculatePriceOfCar(model, days);
            expect(result).to.equal(`You choose ${model} and it will cost $100!`);
        });

        it('should throw an error when the model does not exist in the catalogue', () => {
            const model = 'Ford';
            const days = 7;
            expect(() => rentCar.calculatePriceOfCar(model, days)).to.throw('No such model in the catalog!');
        });

        it('should throw an error when the input is invalid', () => {
            const model = 'Volkswagen';
            const days = '7';
            expect(() => rentCar.calculatePriceOfCar(model, days)).to.throw('Invalid input!');
        });
    });

    describe('checkBudget', () => {
        it('should return "You rent a car!" when the budget is bigger to cost', () => {
            const costPerDay = 40;
            const days = 3;
            const budget = 200;
            const result = rentCar.checkBudget(costPerDay, days, budget);
            expect(result).to.equal('You rent a car!');
        });

        it('should return "You rent a car!" when the budget is equal to cost', () => {
            const costPerDay = 40;
            const days = 3;
            const budget = 120;
            const result = rentCar.checkBudget(costPerDay, days, budget);
            expect(result).to.equal('You rent a car!');
        });

        it('should return "You need a bigger budget!" when the budget is less than cost', () => {
            const costPerDay = 50;
            const days = 7;
            const budget = 300;
            const result = rentCar.checkBudget(costPerDay, days, budget);
            expect(result).to.equal('You need a bigger budget!');
        });

        it('should throw an error when the costPerDay is invalid', () => {
            const costPerDay = '50';
            const days = 7;
            const budget = 300;
            expect(() => rentCar.checkBudget(costPerDay, days, budget)).to.throw('Invalid input!');
        });

        it('should throw an error when the days is invalid', () => {
            const costPerDay = 50;
            const days = '7';
            const budget = 300;
            expect(() => rentCar.checkBudget(costPerDay, days, budget)).to.throw('Invalid input!');
        });

        it('should throw an error when the budget is invalid', () => {
            const costPerDay = 50;
            const days = 7;
            const budget = '300';
            expect(() => rentCar.checkBudget(costPerDay, days, budget)).to.throw('Invalid input!');
        });
    });
});