let counterValue = 0;

const updatedValue = (update) => {
    counterValue += update;
    document.querySelector('#value').textContent = counterValue;
}

document.querySelector('button[data-action="decrement"]').addEventListener('click', () => {
    updatedValue(-1);
});

document.querySelector('button[data-action="increment"]').addEventListener('click', () => {
    updatedValue(1);
});