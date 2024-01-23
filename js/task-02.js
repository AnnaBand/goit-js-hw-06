const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsElements = ingredients.map(ingredient => {
  const itemsList = document.createElement('li');
  itemsList.textContent = ingredient;
  itemsList.classList.add('item');
  return itemsList;
});

ingredientsList.append(...ingredientsElements);