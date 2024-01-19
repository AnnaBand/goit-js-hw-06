const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const itemsList = document.createElement('li');
  itemsList.textContent = ingredient;
  itemsList.classList.add('item');
  ingredientsList.appendChild(itemsList);
});