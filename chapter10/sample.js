// CSS Transitions・CSS Animations
// const button = document.querySelector('button');
// button.addEventListener('click', handleClick, false);
// function handleClick() {
//   const element = document.querySelector('.target');
//   if (element.classList.contains('state-show') === false) {
//     element.classList.add('state-show');
//   } else {
//     element.classList.remove('state-show');
//   };
// };

// const target = document.querySelector('.target');
// target.addEventListener('transitionend', (e) => {
//   const log = document.querySelector('.log');
//   log.innerHTML = 'transitionend 発生 : ' + new Date().toLocaleTimeString();
// });

// const input = document.querySelector('input');
// input.addEventListener('click', () => {
//   const rect = document.querySelector('.rect');
//   if (rect.classList.contains('state-show') === false) {
//     rect.classList.add('state-show');
//   } else {
//     rect.classList.remove('state-show');
//   }
// }, false);

// const rect = document.querySelector('.rect');
// rect.addEventListener('transitionend', () => {
//   const log = document.querySelector('.log');
//   log.innerHTML = 'transitionend 発生 : ' + new Date().toLocaleString();
// });

const input = document.querySelector('input');
input.addEventListener('click', () => {
  const rect = document.querySelector('.rect');
  if (rect.classList.contains('state-show') === false) {
    rect.classList.add('state-show');
  } else {
    rect.classList.remove('state-show');
  }
}, false);

const rect = document.querySelector('.rect');
const log = document.querySelector('.log');

// animationstart
rect.addEventListener('animationstart', () => {
  log.innerHTML = 'animationstart 発生 : ' + new Date().toLocaleString();
}, false);

// animationiteration
rect.addEventListener('animationiteration', () => {
  log.innerHTML = 'animationiteration 発生 : ' + new Date().toLocaleString();
}, false);

// animationend
// 繰り返しを指定した時、animationendは発生しない
// rect.addEventListener('animationend', () => {
//   log.innerHTML = 'animationend 発生 : ' + new Date().toLocaleString();
// }, false);
