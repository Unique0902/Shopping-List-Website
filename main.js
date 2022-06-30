const plusButton = document.querySelector('.add-good');
const goodsList = document.querySelector('.goods-list');
const textArea = document.querySelector('.good-text');

plusButton.addEventListener('click', () => {
  const addName = document.querySelector('#text-box').value;
  const newGood = document.createElement('div');
  newGood.setAttribute('class', 'good');
  goodsList.insertBefore(newGood, textArea);
  newGood.innerHTML = `
    <span class="good-name">${addName}</span>
  `;
  const deleteButton = document.createElement('i');
  deleteButton.setAttribute('class', 'fa-solid fa-trash-can delete-good');
  newGood.append(deleteButton);
  deleteButton.addEventListener('click', () => {
    goodsList.removeChild(newGood);
  });
});
