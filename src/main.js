import { nanoid } from 'nanoid';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordElement = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordElement.innerText = randomPassword;
});

displayPasswordElement.addEventListener('click', (event) => {
  navigator.clipboard.writeText(event.target.textContent)
    .then(() => {
      event.target.classList.add('copied');
      const TIMEDURATION = 2000;
      setTimeout(() => event.target.classList.remove('copied'), TIMEDURATION);
    })
    .catch((error) => { event.target.innerText = error.message; });
});
