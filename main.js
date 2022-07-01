const plusButton = document.querySelector('.add-good');
const goodsList = document.querySelector('.goods-list');
const textArea = document.querySelector('.good-text');
const textBox = document.querySelector('#text-box');
const main = document.querySelector('main');

function makeElement() {
  let addName = textBox.value;
  if (addName === '') {
    alert('텍스트를 입력하지 않았습니다!');
    textBox.focus();
    return;
  }

  const newGood = document.createElement('div');
  newGood.setAttribute('class', 'good');
  goodsList.insertBefore(newGood, textArea);
  newGood.innerHTML = `
    <span class="good-name">${addName}</span>
    <i class="fa-solid fa-trash-can delete-good"></i>
  `;

  // const deleteButton = document.createElement('i');
  // deleteButton.setAttribute('class', 'fa-solid fa-trash-can delete-good');
  // newGood.append(deleteButton);

  /*deleteButton.addEventListener('click', () => {
    goodsList.removeChild(newGood);
    textBox.focus();
  });*/

  textBox.value = '';
  textBox.focus();

  textBox.scrollIntoView({ block: 'center' });
}

main.addEventListener('click', (e) => {
  const elem = e.target;
  if (elem.className === 'fa-solid fa-plus add-good') {
    makeElement();
  } else if (elem.className === 'fa-solid fa-trash-can delete-good') {
    elem.parentElement.parentElement.removeChild(elem.parentElement);
    textBox.focus();
  }
});

/*plusButton.addEventListener('click', () => {
  makeElement();
});*/

textBox.addEventListener('keydown', (e) => {
  if (e.isComposing) {
    return;
  }
  if (e.key === 'Enter') {
    makeElement();
  }
});
