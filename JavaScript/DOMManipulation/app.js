const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const product = form.elements.product;
    const quantity = form.elements.qty
    addItem(product.value, quantity.value)
    product.value = '';
    quantity.value = '';
})

const addItem = (product, quantity) => {
    const newItem = document.createElement('li');
    newItem.append(`${quantity} ${product}`);
    list.appendChild(newItem);
}