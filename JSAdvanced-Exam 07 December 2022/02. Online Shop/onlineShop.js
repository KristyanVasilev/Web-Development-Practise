class OnlineShop {

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace - spaceRequired < 0) {
            throw new TypeError('Not enough space in the warehouse.');
        }

        this.products.push({
            product,
            quantity
        });

        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        const currProduct = this.products.find(p => p.product == product);
        if (currProduct == undefined) {
            throw new TypeError(`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity <= 0) {
            throw new TypeError(`The quantity cannot be zero or negative.`);
        }
        if (currProduct.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`;
        }

        const difference = currProduct.quantity - minimalQuantity;
        currProduct.quantity = minimalQuantity;
        return `You added ${Math.abs(difference)} more from the ${product} products.`;
    }

    sellProduct(product) {
        const currProduct = this.products.find(p => p.product == product);
        if (currProduct == undefined) {
            throw new TypeError(`There is no ${product} in the warehouse.`);
        }

        currProduct.quantity -= 1;
        this.sales.push({
            product: product,
            quantity: product.quantity
        });

        return `The ${currProduct.product} has been successfully sold.`;
    }

    revision(){
        if (this.sales.length == 0) {
            throw new TypeError(`There are no sales today!`);
        }

        const result = [`You sold ${this.sales.length} products today!`,
        'Products in the warehouse:',
        ...this.products.map(p => `${p.product}-${p.quantity} more left`)];

        return result.join('\n');
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());



