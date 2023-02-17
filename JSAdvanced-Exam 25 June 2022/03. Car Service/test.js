const { expect } = require('chai');
const carService = require('./carService');

describe('carService', () => {
    describe('isItExpensive', () => {
        it('should return the correct message when the value of the parameter issue is equal to "Engine"', () => {
            const issue = "Engine";
            const result = carService.isItExpensive(issue);
            expect(result).to.equal(`The issue with the car is more severe and it will cost more money`);
        });


        it('should return the correct message when the value of the parameter issue is equal to "Transmission"', () => {
            const issue = "Transmission";
            const result = carService.isItExpensive(issue);
            expect(result).to.equal(`The issue with the car is more severe and it will cost more money`);
        });

        it('should return the correct message when the above conditions are not met', () => {
            const issue = "not met";
            const result = carService.isItExpensive(issue);
            expect(result).to.equal(`The overall price will be a bit cheaper`);
        });
    });

    describe('discount', () => {
        it('apply 15% discount when numberOfParts is higher than 2 and smaller or equal to 7', () => {
            const numberOfParts = 3;
            const totalPrice = 20;
            const result = carService.discount(numberOfParts, totalPrice);
            expect(result).to.equal(`Discount applied! You saved 3$`);
        });

        it('apply 30% discount when numberOfParts is higher than 7', () => {
            const numberOfParts = 15;
            const totalPrice = 20;
            const result = carService.discount(numberOfParts, totalPrice);
            expect(result).to.equal(`Discount applied! You saved 6$`);
        });

        it('shouldnt apply discount when numberOfParts is smaller or equal to 2', () => {
            const numberOfParts = 2;
            const totalPrice = 20;
            const result = carService.discount(numberOfParts, totalPrice);
            expect(result).to.equal(`You cannot apply a discount`);
        });

        it('should throw an error when numberOfParts is not a number', () => {
            const numberOfParts = 'not a number';
            const totalPrice = 20;
            expect(() => carService.discount(numberOfParts, totalPrice)).to.throw('Invalid input');
        });

        it('should throw an error when totalPrice is not a number', () => {
            const numberOfParts = 20;
            const totalPrice = 'not a number';
            expect(() => carService.discount(numberOfParts, totalPrice)).to.throw('Invalid input');
        });
    });

    describe('partsToBuy', () => {
        it('should calculate the total price of the parts that are equal to the neededParts', () => {
            const partsCatalog = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }];
            const neededParts = ["blowoff valve", "injectors"];
            const result = carService.partsToBuy(partsCatalog, neededParts);
            expect(result).to.equal(145);
        });

        it('should return 0 when partsCatalog is empty', () => {
            const partsCatalog = [{  }];
            const neededParts = ["blowoff valve", "injectors"];
            const result = carService.partsToBuy(partsCatalog, neededParts);
            expect(result).to.equal(0);
        });

        it('should throw an error when the partsCatalog is not an array', () => {
            const partsCatalog = 'not an array';
            const neededParts = ["blowoff valve", "injectors"];
            expect(() => carService.partsToBuy(partsCatalog, neededParts)).to.throw('Invalid input');
        });

        it('should throw an error when the neededParts is not an array', () => {
            const partsCatalog = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }];
            const neededParts = 'not an array';
            expect(() => carService.partsToBuy(partsCatalog, neededParts)).to.throw('Invalid input');
        });
    });
});