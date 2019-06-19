let red = document.querySelector('.block--red');
console.log(red)
let blue = document.querySelector('.block--blue');
let green = document.querySelector('.block--green');
let pink = document.querySelector('.block--pink');
let gray = document.querySelector('.block--gray');

let parent = document.querySelector('.blocks');
parent.addEventListener('click', (event) => {
  event.stopPropagation();
})

red.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  let all = document.querySelectorAll('.blocks div');
  all.forEach(elem => elem.removeAttribute('style'));
  console.log(all)
  red.style.order = '-1';
})

blue.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  let all = document.querySelectorAll('.blocks div');
  all.forEach(elem => elem.removeAttribute('style'));
  blue.style.order = '-1';
})

green.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  let all = document.querySelectorAll('.blocks div');
  all.forEach(elem => elem.removeAttribute('style'));
  green.style.order = '-1';
})

pink.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  let all = document.querySelectorAll('.blocks div');
  all.forEach(elem => elem.removeAttribute('style'));
  pink.style.order = '-1';
})

gray.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  let all = document.querySelectorAll('.blocks div');
  all.forEach(elem => elem.removeAttribute('style'));
  gray.style.order = '-1';
  console.log(gray)
})
