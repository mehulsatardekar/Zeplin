// simple modal buttons
const modal = document.querySelector('#modalExample');
const modalCloseBtn = document.querySelector('#modalCloseBtn');
const showModalBtn = document.querySelector('#showModalBtn');


// simple modal listeners
showModalBtn.addEventListener('click',()=> modal.classList.remove('hide'));
modalCloseBtn.addEventListener('click',()=> modal.classList.add('hide'));

// hides modal when click outside
window.addEventListener('click',(e)=> (e.target === modal)? modal.classList.add('hide'):'')


// slider js

const sliderInput = document.querySelector('#rangeSlider');
const sliderValue = document.querySelector('#rangeSliderText');

sliderInput.addEventListener('input',()=> sliderValue.innerText = sliderInput.value)