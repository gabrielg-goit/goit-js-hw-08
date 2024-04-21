import throttle from 'lodash.throttle';

const emailText = document.querySelector('input');
const messageText = document.querySelector('textarea');
const mainForm = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

let emailMessage = { email: '', message: '' };

const storage = throttle(function () {
  emailText.addEventListener('input', event => {
    emailMessage.email = event.currentTarget.value;
    console.log(emailMessage);
    localStorage.setItem(localStorageKey, JSON.stringify(emailMessage));
  });
  messageText.addEventListener('input', event => {
    emailMessage.message = event.currentTarget.value;
    console.log(emailMessage);
    localStorage.setItem(localStorageKey, JSON.stringify(emailMessage));
  });
}, 1000);
storage();

const parsedInput = JSON.parse(localStorage.getItem(localStorageKey));
emailText.value = parsedInput.email;
messageText.value = parsedInput.message;

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(localStorageKey);
  let newEmailMessage = { email: '', message: '' };
  newEmailMessage.email = emailText.value;
  newEmailMessage.message = messageText.value;
  form.reset();
});
