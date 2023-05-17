"use strict";

// variables
const password = document.getElementById('password');
const copy = document.getElementById('copy');
const result = document.getElementById('result');
const slider = document.getElementById('slider_id');
const check = document.querySelectorAll('.check');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const level = document.getElementById('level');
const checkOne = document.getElementById('check_one');
const checkTwo = document.getElementById('check_two');
const checkThree = document.getElementById('check_three');
const checkFour = document.getElementById('check_four');
const btn = document.getElementById('btn');

// function of copy password
copy.addEventListener('click', () => {
    var hiddenCopy = document.querySelector('.hidden_copy');
    hiddenCopy.style.display = "Block";
    var copyPassword = password.textContent;
    navigator.clipboard.writeText(copyPassword);
});

// slider background color
slider.oninput = function() {
    const valueSlider = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + valueSlider + '%, #18171F ' + valueSlider + '%, #18171F 100%)';
};

slider.addEventListener('input', () => {
    password.textContent = "LOADING...";
    result.textContent = slider.value;
});

// make random password
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_";
let total = "";
let counter = 0;

function checkBox(){
    password.textContent = "Check at least one argument";
    if(one.checked){
        total += capitalLetters;
        counter++;
        password.textContent = "";
        password.style.fontSize =  "";
        password.style.color = "";

    } if(two.checked){
        total += alphabet;
        counter++;
        password.textContent = "";
        password.style.fontSize =  "";
        password.style.color = "";

    } if(three.checked){
        total += numbers;
        counter++;
        password.textContent = "";
        password.style.fontSize =  "";
        password.style.color = "";

    } if(four.checked){
        total += symbols;
        counter++;
        password.textContent = "";
        password.style.fontSize =  "";
        password.style.color = "";
    }
};

// password level
function passwordLevel() {
    if(counter === 1){
        checkOne.classList.add('too-weak');
        level.textContent = "too-weak";
    }else if(counter === 2){
        checkOne.classList.add('weak');
        checkTwo.classList.add('weak');
        level.textContent = "weak";
    }else if(counter === 3){
        checkOne.classList.add('medium');
        checkTwo.classList.add('medium');
        checkThree.classList.add('medium');
        level.textContent = "medium";
    }else if(counter === 4){
        checkOne.classList.add('strong');
        checkTwo.classList.add('strong');
        checkThree.classList.add('strong');
        checkFour.classList.add('strong');
        level.textContent = "strong";
    }
};

// if the chechbox is empty remove levels
function checkNan() {
    checkOne.classList.remove('too-weak');
    checkOne.classList.remove('weak');
    checkTwo.classList.remove('weak');
    checkOne.classList.remove('medium');
    checkTwo.classList.remove('medium');
    checkThree.classList.remove('medium');
    checkOne.classList.remove('strong');
    checkTwo.classList.remove('strong');
    checkThree.classList.remove('strong');
    checkFour.classList.remove('strong');
    password.textContent = "Check at least one argument";
    password.style.fontSize = "1.6rem";
    password.style.color = "#F64A4A";
};

// loading function
slider.addEventListener('input', () => {
    password.textContent = "LOADING...";
    password.style.color = "";
    result.textContent = slider.value;
});

// generate function
btn.addEventListener('click', () => {
    password.textContent = "";
    counter = 0;
    total = "";
    password.style.opacity = "1";

    checkNan();
    checkBox();
    passwordLevel();

    for(let i = 0; i < slider.value; i++){
        const randomIndx = Math.floor(Math.random() * total.length);
        const randomLttr = total.charAt(randomIndx);
        password.textContent += randomLttr;
    }
});
