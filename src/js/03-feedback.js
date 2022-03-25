import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-msg';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput), 500);

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log("Отпраявлем форму");

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
    const message = evt.target.value;

    localStorage.setItem(STORAGE_KEY, message);
};


function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
    
};
