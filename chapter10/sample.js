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
rect.addEventListener('transitionend', () => {
  const log = document.querySelector('.log');
  log.innerHTML = 'transitionend 発生 : ' + new Date().toLocaleString();
});
