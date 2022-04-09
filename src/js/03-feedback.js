import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

form.addEventListener("submit", onSubmit);

form.addEventListener("input", throttle(onInput, 500));

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

filledForm()

function onSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function filledForm() {
    const dataValue = localStorage.getItem(STORAGE_KEY);
    const dataParse = JSON.parse(dataValue);
    console.log(dataValue);
    console.log(dataParse);
    if (dataValue) {
        form.email.value = dataParse.email;
        form.message.value = dataParse.message;
    }
};