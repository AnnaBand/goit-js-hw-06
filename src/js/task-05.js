const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const userName = nameInput.value;

  if (userName === '') {
    nameOutput.textContent = 'Anonymous';
  }
  else {
    nameOutput.textContent = `${userName}`;
  }
});