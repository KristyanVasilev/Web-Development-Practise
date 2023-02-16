const { expect } = require('chai');
const movieTheater = require('./movieTheater');

describe('movieTheater', () => {
    describe('ageRestrictions', () => {
        it('should return the correct message when rating is equal to G', () => {
            const movieRating = "G";
            const result = movieTheater.ageRestrictions(movieRating);
            expect(result).to.equal(`All ages admitted to watch the movie`);
        });

        it('should return the correct message when rating is equal to PG', () => {
            const movieRating = "PG";
            const result = movieTheater.ageRestrictions(movieRating);
            expect(result).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        });

        it('should return the correct message when rating is equal to R', () => {
            const movieRating = "R";
            const result = movieTheater.ageRestrictions(movieRating);
            expect(result).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        });

        it('should return the correct message when rating is equal to NC-17', () => {
            const movieRating = "NC-17";
            const result = movieTheater.ageRestrictions(movieRating);
            expect(result).to.equal(`No one under 17 admitted to watch the movie`);
        });

        it('should return the correct message when there are is no restriction', () => {
            const movieRating = "no restriction";
            const result = movieTheater.ageRestrictions(movieRating);
            expect(result).to.equal(`There are no age restrictions for this movie`);
        });
    });

    describe('moneySpent', () => {
        it('If the total cost is bigger than 50 a discount of 20% should be applied', () => {
            const tickets = 3;
            const food = ['Nachos', 'Popcorn'];
            const drinks = ['Soda', 'Water'];
            const result = movieTheater.moneySpent(tickets, food, drinks);
            expect(result).to.equal(`The total cost for the purchase with applied discount is 47.60`);
        });

        it('If the total cost is smaller than 50 a discount of 20% shouldnt be applied', () => {
            const tickets = 1;
            const food = ['Nachos', 'Popcorn'];
            const drinks = ['Soda', 'Water'];
            const result = movieTheater.moneySpent(tickets, food, drinks);
            expect(result).to.equal(`The total cost for the purchase is 29.50`);
        });

        it('should throw an error when tickets is not a number', () => {
            const tickets = 'not a number';
            const food = ['Nachos', 'Popcorn'];
            const drinks = ['Soda', 'Water'];
            expect(() => movieTheater.moneySpent(tickets, food, drinks)).to.throw('Invalid input');
        });

        it('should throw an error when drinks is not an array', () => {
            const tickets = 'not a number';
            const food = ['Nachos', 'Popcorn'];
            const drinks = 'Soda';
            expect(() => movieTheater.moneySpent(tickets, food, drinks)).to.throw('Invalid input');
        });

        it('should throw an error when food is not an array', () => {
            const tickets = 'not a number';
            const food = 'Popcorn';
            const drinks = ['Soda', 'Water'];
            expect(() => movieTheater.moneySpent(tickets, food, drinks)).to.throw('Invalid input');
        });
    });

    describe('reservation', () => {
        it('should return the row with the largest number', () => {
            const rowsArray = [{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }];
            const neededSeatsCount = 2;
            const result = movieTheater.reservation(rowsArray, neededSeatsCount);
            expect(result).to.equal(2);
        });

        it('should throw an error when the rowsArray is not an array', () => {
            const rowsArray = 'not an array';
            const neededSeatsCount = 2;
            expect(() => movieTheater.reservation(rowsArray, neededSeatsCount)).to.throw('Invalid input');
        });

        it('should throw an error when the neededSeatsCount is not a number', () => {
            const rowsArray = [{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }];
            const neededSeatsCount = '2';
            expect(() => movieTheater.reservation(rowsArray, neededSeatsCount)).to.throw('Invalid input');
        });
    });
});