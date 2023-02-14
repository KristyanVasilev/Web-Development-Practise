const { expect } = require('chai');
const flowerShop = require('./flowerShop');

describe('flowerShop', () => {
    describe('calcPriceOfFlowers', () => {
        it('The function returns the multiplies price and quantity', () => {
            const flower = 'Rose';
            const price = 10;
            const quantity = 5;
            const result = flowerShop.calcPriceOfFlowers(flower, price, quantity);
            expect(result).to.equal(`You need $50.00 to buy ${flower}!`);
        });

        it('should throw an error when the flower input is not valid.', () => {
            const flower = 1;
            const price = 10;
            const quantity = 5;
            expect(() => flowerShop.calcPriceOfFlowers(flower, price, quantity)).to.throw('Invalid input!');
        });

        it('should throw an error when the price input is not valid.', () => {
            const flower = 'Rose';
            const price = '10';
            const quantity = 5;
            expect(() => flowerShop.calcPriceOfFlowers(flower, price, quantity)).to.throw('Invalid input!');
        });

        it('should throw an error when the quantity input is not valid.', () => {
            const flower = 'Rose';
            const price = 10;
            const quantity = '5';
            expect(() => flowerShop.calcPriceOfFlowers(flower, price, quantity)).to.throw('Invalid input!');
        });
    });

    describe('checkFlowersAvailable', () => {
        it('should return the correct message when the model exists in the gardenArr', () => {
            const gardenArr = ['Rose', 'Lily', 'Orchid'];
            const flower = 'Rose';
            const result = flowerShop.checkFlowersAvailable(flower, gardenArr);
            expect(result).to.equal(`The ${flower} are available!`);
        });

        it('should throw an error when the flower does not exist in the gardenArr', () => {
            const gardenArr = ['Lily', 'Orchid'];
            const flower = 'Rose';
            const result = flowerShop.checkFlowersAvailable(flower, gardenArr);
            expect(result).to.equal(`The ${flower} are sold! You need to purchase more!`);
        });
    });

    describe('sellFlowers', () => {
        it('should return the changed array of flowers as a string, joined by " / "', () => {
            const gardenArr = ['Rose', 'Lily', 'Orchid'];
            const space = 1;
            const result = flowerShop.sellFlowers(gardenArr, space);
            expect(result).to.equal(`Rose / Orchid`);
        });

        it('should throw an error when the gardenArr input is invalid', () => {
            const gardenArr = 'Rose';
            const space = 1;
            expect(() => flowerShop.sellFlowers(gardenArr, space)).to.throw('Invalid input!');
        });

        it('should throw an error when the gardenArr input is invalid', () => {
            const gardenArr = ['Rose', 'Lily', 'Orchid'];
            const space = '1';
            expect(() => flowerShop.sellFlowers(gardenArr, space)).to.throw('Invalid input!');
        });
    });
});