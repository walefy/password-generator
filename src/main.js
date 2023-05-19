import { nanoid } from 'nanoid';

const passwordBtnEl = document.querySelector('button');
const displayPasswordElement = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordElement.innerText = randomPassword;
});

console.log(randomPassword);
