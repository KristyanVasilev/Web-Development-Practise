const { expect } = require('chai');
const motorcycleRider = require('./motorcycleRider');

describe('motorcycleRider', () => {
    describe('licenseRestriction', () => {
        it('should return right message for AM category', () => {
            const category = 'AM';
            const result = motorcycleRider.licenseRestriction(category);
            expect(result).to.equal(`Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.`);
        });

        it('should return right message for AM category', () => {
            const category = 'A1';
            const result = motorcycleRider.licenseRestriction(category);
            expect(result).to.equal(`Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.`);
        });

        it('should return right message for AM category', () => {
            const category = 'A2';
            const result = motorcycleRider.licenseRestriction(category);
            expect(result).to.equal(`Motorcycles with maximum power of 35KW. and the minimum age is 18.`);
        });

        it('should return right message for AM category', () => {
            const category = 'A';
            const result = motorcycleRider.licenseRestriction(category);
            expect(result).to.equal(`No motorcycle restrictions, and the minimum age is 24.`);
        });

        it('should throw an error when the category input is not valid.', () => {
            const category = 'invalid';
            expect(() => motorcycleRider.licenseRestriction(category)).to.throw('Invalid Information!');
        });
    });

    describe('motorcycleShowroom', () => {
        it('should return the correct message when the inputs are correct', () => {
            const engineVolume = ['500', '200', '300'];
            const maximumEngineVolume = 1000;
            const result = motorcycleRider.motorcycleShowroom(engineVolume, maximumEngineVolume);
            expect(result).to.equal(`There are 3 available motorcycles matching your criteria!`);
        });

        it('should throw an error when the maximumEngineVolume is less than 50', () => {
            const engineVolume = ['500', '200', '300'];
            const maximumEngineVolume = 49;
            expect(() => motorcycleRider.motorcycleShowroom(engineVolume, maximumEngineVolume)).to.throw('Invalid Information!');
        });

        it('should throw an error when the maximumEngineVolume is not a number', () => {
            const engineVolume = ['500', '200', '300'];
            const maximumEngineVolume = '1';
            expect(() => motorcycleRider.motorcycleShowroom(engineVolume, maximumEngineVolume)).to.throw('Invalid Information!');
        });

        it('should throw an error when the engineVolume is empty array', () => {
            const engineVolume = [];
            const maximumEngineVolume = 50;
            expect(() => motorcycleRider.motorcycleShowroom(engineVolume, maximumEngineVolume)).to.throw('Invalid Information!');
        });

        it('should throw an error when the engineVolume is not an array', () => {
            const engineVolume = 'not array';
            const maximumEngineVolume = 50;
            expect(() => motorcycleRider.motorcycleShowroom(engineVolume, maximumEngineVolume)).to.throw('Invalid Information!');
        });
    });

    describe('otherSpendings', () => {
        it('should return the correct message when the inputs are correct', () => {
            const equipment = ['helmet', 'jacked'];
            const consumables = ['engine oil', 'oil filter'];
            const discount = true;  // 10 percents if true
            const result = motorcycleRider.otherSpendings(equipment, consumables, discount);
            expect(result).to.equal(`You spend $540.00 for equipment and consumables with 10% discount!`);
        });

        it('shouldnt apply the 10% if discount is set to false', () => {
            const equipment = ['helmet', 'jacked'];
            const consumables = ['engine oil', 'oil filter'];
            const discount = false;  // 10 percents if true
            const result = motorcycleRider.otherSpendings(equipment, consumables, discount);
            expect(result).to.equal(`You spend $600.00 for equipment and consumables!`);
        });

        it('should throw an error when the equipment input is not array', () => {
            const equipment = 'not array';
            const consumables = ['engine oil', 'oil filter'];
            const discount = false;
            expect(() => motorcycleRider.otherSpendings(equipment, consumables, discount)).to.throw('Invalid Information!');
        });

        it('should throw an error when the consumables input is array', () => {
            const equipment = ['helmet', 'jacked'];
            const consumables = 'not array';
            const discount = false;
            expect(() => motorcycleRider.otherSpendings(equipment, consumables, discount)).to.throw('Invalid Information!');
        });

        it('should throw an error when the consumables input is boolean', () => {
            const equipment = ['helmet', 'jacked'];
            const consumables = ['engine oil', 'oil filter'];
            const discount = 'false';
            expect(() => motorcycleRider.otherSpendings(equipment, consumables, discount)).to.throw('Invalid Information!');
        });
    });
});