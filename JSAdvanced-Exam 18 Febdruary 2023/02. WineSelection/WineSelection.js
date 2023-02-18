class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space == 0) {
            throw new Error(`Not enough space in the cellar.`);
        }

        this.wines.push({
            wineName, wineType, price, paid: false
        });

        this.space -= 1;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const currWine = this.wines.find(w => w.wineName == wineName);

        if (!currWine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (currWine.paid == true) {
            throw new Error(`${wineName} has already been paid.`);
        }

        currWine.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const index = this.wines.findIndex(w => w.wineName == wineName);
        const currWine = this.wines[index];

        if (!currWine) {
            throw new Error(`The wine, you're looking for, is not found.`);
        }

        if (currWine.paid == false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines.splice(index, 1);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (!wineType) {
            const sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            const result = [`You have space for ${this.space} bottles more.`,
            `You paid ${this.bill}$ for the wine.`,
            ...sortedWines.map(w => `${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`)];

            return result.join('\n');
        }

        const filteredWines = this.wines.filter(w => w.wineType === wineType);
        if (filteredWines.length === 0) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        const result = [...filteredWines.map(w => `${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`)];

        return result.join('\n');
    }
}

const selection = new WineSelection(5)
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));
console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
console.log(selection.cellarRevision('as'));



