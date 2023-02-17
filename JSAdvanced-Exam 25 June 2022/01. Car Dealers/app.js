window.addEventListener("load", solve);

function solve() {
  const makeInput = document.getElementById('make');
  const modelInput = document.getElementById('model');
  const yearInput = document.getElementById('year');
  const fuelInput = document.getElementById('fuel');
  const originalCostInput = document.getElementById('original-cost');
  const sellingPriceInput = document.getElementById('selling-price');
  const table = document.getElementById('table-body');
  const carList = document.getElementById('cars-list');
  publishBtn = document.getElementById('publish').addEventListener('click', publish);
  const profit = document.getElementById('profit');
  let totalProfit = 0.00;


  function publish(event) {
    event.preventDefault();
    const make = makeInput.value;
    const model = modelInput.value;
    const year = yearInput.value;
    const fuel = fuelInput.value;
    const cost = originalCostInput.value;
    const price = sellingPriceInput.value;

    if (Number(price) <= Number(cost)) {
      return;
    }
    if (make == '' || model == '' || year == ''
      || fuel == '' || cost == '' || price == '') {
      return;
    }

    const element = document.createElement('tr');
    element.innerHTML = `
    <td>${make}</td>
    <td>${model}</td>
    <td>${year}</td>
    <td>${fuel}</td>
    <td>${cost}</td>
    <td>${price}</td>
    <td>
    <button class="action-btn edit">Edit</button> 
    <button class="action-btn sell">Sell</button>
    </td>`;
    [editBtn, sellBtn] = element.querySelectorAll('.action-btn');
    editBtn.addEventListener('click', () => edit(element));
    sellBtn.addEventListener('click', () => sell(element));

    table.appendChild(element);
    resetInput();

    function edit(source) {
      makeInput.value = make;
      modelInput.value = model;
      yearInput.value = year;
      fuelInput.value = fuel;
      originalCostInput.value = cost;
      sellingPriceInput.value = price;

      source.remove();
    }

    function sell(source) {
      const soldCarElement = document.createElement('li');
      soldCarElement.className = 'each-list';
      soldCarElement.innerHTML = `
      <span>${make} ${model}</span>
      <span>${year}</span>
      <span>${Number(price) - Number(cost)}</span>`;

      carList.appendChild(soldCarElement);
      totalProfit += Number(price) - Number(cost);
      profit.innerHTML = totalProfit.toFixed(2);
    
      source.remove();
    }
  }

  function resetInput() {
    makeInput.value = '';
    modelInput.value = '';
    yearInput.value = '';
    fuelInput.value = '';
    originalCostInput.value = '';
    sellingPriceInput.value = '';
  }
}
