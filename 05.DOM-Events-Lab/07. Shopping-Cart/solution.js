function solve() {
   const products = document.querySelectorAll('.product');
   const textArea = document.querySelector('textarea');
   const checkoutButton = document.querySelector('.checkout');

   Array.from(products).forEach((product) => {
       const addButton = product.querySelector('.add-product');
       addButton.addEventListener('click', () => {
           const productTitle = product.querySelector('.product-title').textContent;
           const productPrice = Number(product.querySelector('.product-line-price').textContent).toFixed(2);
           textArea.textContent += `Added ${productTitle} for ${productPrice} to the cart.\n`;
       });
   });

   checkoutButton.addEventListener('click', () => {
       let totalPrice = 0;
       const productsInCart = textArea.textContent.split('\n');
       const uniqueProducts = [];

       productsInCart.forEach((product) => {
           const productData = product.split(' for ');
           if (productData.length === 2) {
               totalPrice += Number(productData[1].split(' ')[0]);
               if (!uniqueProducts.includes(productData[0].split(' ')[1])) {
                   uniqueProducts.push(productData[0].split(' ')[1]);
               }
           }
       });

       textArea.textContent += `You bought ${uniqueProducts.join(', ')} for ${totalPrice.toFixed(2)}.\n`;
       checkoutButton.setAttribute('disabled', 'true');
       textArea.setAttribute('disabled', 'true');

       Array.from(products).forEach((product) => {
           const addButton = product.querySelector('.add-product');
           addButton.setAttribute('disabled', 'true');
       });
   });
}